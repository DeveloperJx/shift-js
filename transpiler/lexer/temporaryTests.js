it('should handle functions that use all possible types as parameters and arguments', function () {
      input = String.raw`func printAllTypes(first: Character, second: Double, third: Float, fourth: Bool, fifth: Int, sixth: Int8, seventh: Int16, eigth: Int32, nineth: Int64, tenth: String, eleventh: UInt, twelvth: UInt8, thirteenth: UInt16, fourteenth: UInt32, fifteenth: UInt64) {
                        print(first)
                        print(second)
                        print(third)
                        print(fourth)
                        print(fifth)
                        print(sixth)
                        print(seventh)
                        print(eigth)
                        print(nineth)
                        print(tenth)
                        print(eleventh)
                        print(twelvth)
                        print(thirteenth)
                        print(fourteenth)
                        print(fifteenth)
                    }
                    printAllTypes("a", second: 15.5, third: -16.66, fourth: true, fifth: -5, sixth: -6, seventh: -7, eigth: -8, nineth: -9, tenth: "blah", eleventh: 11, twelvth: 12, thirteenth: 13, fourteenth: 14, fifteenth: 15)`;
      output = [ 
        { type: 'DECLARATION_KEYWORD', value: 'func' },
        { type: 'IDENTIFIER', value: 'printAllTypes' },
        { type: 'PARAMS_START', value: '(' },
        { type: 'IDENTIFIER', value: 'first' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_STRING', value: 'Character' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'second' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_NUMBER', value: 'Double' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'third' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_NUMBER', value: 'Float' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'fourth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_BOOLEAN', value: 'Bool' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'fifth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_NUMBER', value: 'Int' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'sixth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_NUMBER', value: 'Int8' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'seventh' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_NUMBER', value: 'Int16' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'eigth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_NUMBER', value: 'Int32' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'nineth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_NUMBER', value: 'Int64' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'tenth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_STRING', value: 'String' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'eleventh' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_NUMBER', value: 'UInt' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'twelvth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_NUMBER', value: 'UInt8' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'thirteenth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_NUMBER', value: 'UInt16' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'fourteenth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_NUMBER', value: 'UInt32' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'fifteenth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'TYPE_NUMBER', value: 'UInt64' },
        { type: 'PARAMS_END', value: ')' },
        { type: 'STATEMENTS_START', value: '{' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'first' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'second' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'third' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'fourth' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'fifth' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'sixth' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'seventh' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'eigth' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'nineth' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'tenth' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'eleventh' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'twelvth' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'thirteenth' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'fourteenth' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'NATIVE_METHOD', value: 'print' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'IDENTIFIER', value: 'fifteenth' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'STATEMENTS_END', value: '}' },
        { type: 'TERMINATOR', value: '\\n' },

        { type: 'IDENTIFIER', value: 'printAllTypes' },
        { type: 'INVOCATION_START', value: '(' },
        { type: 'STRING', value: 'a' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'second' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'NUMBER', value: '15.5' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'third' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'OPERATOR', value: '-' },
        { type: 'NUMBER', value: '16.66' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'fourth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'BOOLEAN', value: 'true' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'fifth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'OPERATOR', value: '-' },
        { type: 'NUMBER', value: '5' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'sixth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'OPERATOR', value: '-' },
        { type: 'NUMBER', value: '6' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'seventh' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'OPERATOR', value: '-' },
        { type: 'NUMBER', value: '7' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'eigth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'OPERATOR', value: '-' },
        { type: 'NUMBER', value: '8' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'nineth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'OPERATOR', value: '-' },
        { type: 'NUMBER', value: '9' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'tenth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'STRING', value: 'blah' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'eleventh' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'NUMBER', value: '11' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'twelvth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'NUMBER', value: '12' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'thirteenth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'NUMBER', value: '13' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'fourteenth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'NUMBER', value: '14' },
        { type: 'PUNCTUATION', value: ',' },
        { type: 'IDENTIFIER', value: 'fifteenth' },
        { type: 'PUNCTUATION', value: ':' },
        { type: 'NUMBER', value: '15' },
        { type: 'INVOCATION_END', value: ')' },
        { type: 'TERMINATOR', value: 'EOF' } 
        ];
      expect(lexer(input)).to.deep.equal(output);
    });