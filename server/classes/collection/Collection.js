const logger = require('../../config/winston');
const fs = require('fs');
const path = require('path');
const AppError = require('../../errors/AppError');

class Collection {
  constructor(items) {
    this.items = [...items];
  }

  /**
   * Asynchronously filter items
   *
   * @param filters
   * @returns {Promise<*>}
   */
  async filterAsync(filters) {
    const items = [...this.items];

    const promises = items.map(item => this.itemMatchesFilters(item, filters));

    // Await for all of the filters results
    const results = await Promise.all(promises);

    // Now we can filter items synchronously
    return this.items.filter((item, index) => results[index]);
  }

  /**
   * Asynchronously check if item matches all of the filters
   *
   * @param item
   * @param filters
   * @returns {Promise<boolean>}
   */
  async itemMatchesFilters(item, filters) {
    const promises = filters.map(filter => this.itemMatchesFilter(item, filter));

    // Await for all of the item filters results
    const results = await Promise.all(promises);

    // Check if every filter returned true
    return results.every(result => result === true);
  }

  /**
   * Asynchronously check if item matches specific filter
   *
   * @param item
   * @param filter
   * @returns {Promise<*>}
   */
  async itemMatchesFilter(item, filter) {
    const [param, val] = filter;

    const [field, operator] = param.includes(':') ?
      param.split(':') : // If param contains operator - split it
      [param, 'eq']; // eq (=) is the default operator

    // Require appropriate filter
    const filterObj = this.requireFilter(field, operator);

    // Validate filter object to make sure it follows the expected interface
    this.validateFilterObj(filterObj);

    const result = await filterObj.filter(item, field, val);

    // Validate filter result to make sure it returns the expected type
    this.validateFilterResult(result);

    return result;
  }

  /**
   * Validate filter object to make sure it follows the expected interface
   *
   * @param filterObj
   */
  validateFilterObj(filterObj) {
    if (filterObj === undefined || filterObj.filter === undefined) {
      throw new Error('Filter is not correct');
    }
  }

  /**
   * Validate filter result to make sure it returns the expected type
   *
   * @param result
   */
  validateFilterResult(result) {
    if (typeof result !== "boolean") {
      throw new Error('Filter result should be boolean');
    }
  }

  /**
   * Require filters from different locations by priority
   */
  requireFilter(field, operator) {
    try {
      const fieldFilterOperatorPath = this.getFieldFilterOperatorPath(`${field}_${operator}`);
      const fieldFilterPath = this.getFieldFilterPath(field);
      const operatorFilterPath = this.getOperatorFilterPath(operator);

      if (fs.existsSync(`${fieldFilterOperatorPath}.js`)) {
        // Require "field:operator" filters, e.g.: category:eq, rating:gte, ...
        return require(fieldFilterOperatorPath);
      } else if (fs.existsSync(`${fieldFilterPath}.js`)) {
        // Require "field" filters, e.g.: rating, min_age, ...
        return require(fieldFilterPath);
      } else {
        // Require default operator filters, e.g.: eq, lte, gte, in, ...
        return require(operatorFilterPath);
      }
    } catch (e) {
      logger.error('File requiring error', e);

      if (e.code === 'MODULE_NOT_FOUND') {
        throw new AppError('Module not found', 422);
      }
    }
  }

  getFieldFilterOperatorPath(fileName) {
    return this.getChildFilePath(fileName);
  }

  getFieldFilterPath(fileName) {
    return this.getChildFilePath(fileName);
  }

  getOperatorFilterPath(fileName) {
    return `./filters/${fileName}`;
  }

  getChildFilePath(fileName) {
    return path.join(path.dirname(module.parent.filename), `filters/${fileName}`)
  }
}

module.exports = Collection;
