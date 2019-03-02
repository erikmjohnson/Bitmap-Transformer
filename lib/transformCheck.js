'use strict';

const transformer = (trans, construct) => {

  if (trans.toLowerCase() === 'negative') {
    construct.negative();
  }

  if (trans.toLowerCase() === 'pinkhighlights') {
    construct.pinkHighlights();
  }

  if (trans.toLowerCase() === 'allblack') {
    construct.allBlack();
  }

  if (trans.toLowerCase() === 'allwhite') {
    construct.allWhite();
  }

  if (trans.toLowerCase() === 'neon1') {
    construct.neon1();
  }

  if (trans.toLowerCase() === 'neon2') {
    construct.neon2();
  }
};

module.exports = transformer;