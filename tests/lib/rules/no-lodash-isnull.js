/**
 * @fileoverview Prevent use of _.isNull
 * @author mkusaka
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-lodash-isnull"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-lodash-isnull", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "_.isNull(5)",
      errors: [
        {
          message: "Fill me in.",
          type: "Me too",
        },
      ],
    },
  ],
});
