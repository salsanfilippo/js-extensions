## Classes
<dl>
<dt><a href="#Object">Object</a></dt>
<dd></dd>
<dt><a href="#JSON">JSON</a></dt>
<dd></dd>
<dt><a href="#String">String</a></dt>
<dd></dd>
</dl>
## Functions
<dl>
<dt><a href="#String+format The format string is composed of zero or more directives_
ordinary characters (excluding %) that are copied directly to the result, and
conversion specifications, each of which results in fetching its own parameter.">format The format string is composed of zero or more directives:
ordinary characters (excluding %) that are copied directly to the result, and
conversion specifications, each of which results in fetching its own parameter.(params)</a> ⇒ <code><a href="#String">String</a></code></dt>
<dd><p>Formats a string using the current string as the format string.
Numbered tokens are used to insert values e.g. &#39;Format string {0}, {1}, {2}&#39;.</p>
</dd>
</dl>
<a name="Object"></a>
## Object
**Kind**: global class  

* [Object](#Object)
  * [new Object()](#new_Object_new)
  * [.clone(obj)](#Object.clone) ⇒ <code>[Object](#Object)</code>
  * [.equals(obj, other)](#Object.equals) ⇒ <code>boolean</code>
  * [.hashCode(obj)](#Object.hashCode) ⇒ <code>int</code>
  * [.merge(params)](#Object.merge) ⇒ <code>\*</code>

<a name="new_Object_new"></a>
### new Object()
Placeholder for Object class. The methods below are extension methods
for the builtin Object type.

<a name="Object.clone"></a>
### Object.clone(obj) ⇒ <code>[Object](#Object)</code>
Makes a deep copy of an object

**Kind**: static method of <code>[Object](#Object)</code>  
**Returns**: <code>[Object](#Object)</code> - The cloned object.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The object to clone. |

<a name="Object.equals"></a>
### Object.equals(obj, other) ⇒ <code>boolean</code>
Makes a deep copy of an object

**Kind**: static method of <code>[Object](#Object)</code>  
**Returns**: <code>boolean</code> - True if both objects are equal. False, otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The first object to compare. |
| other |  | The second object to compare. |

<a name="Object.hashCode"></a>
### Object.hashCode(obj) ⇒ <code>int</code>
Generates a hash code for an Object.

**Kind**: static method of <code>[Object](#Object)</code>  
**Returns**: <code>int</code> - The hashcode of the Object.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The object to generate a hashcode from. |

<a name="Object.merge"></a>
### Object.merge(params) ⇒ <code>\*</code>
Creates an object that includes members from the source objects

**Kind**: static method of <code>[Object](#Object)</code>  
**Returns**: <code>\*</code> - A new object that combines the source objects.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>\*</code> | The object to copy merge. |

<a name="JSON"></a>
## JSON
**Kind**: global class  

* [JSON](#JSON)
  * [new JSON()](#new_JSON_new)
  * [.safeStringify(str, replacer, spaces, cycleRepeater)](#JSON.safeStringify) ⇒ <code>[String](#String)</code>
  * [.serializer(replacer, cycleRepeater)](#JSON.serializer) ⇒ <code>function</code>

<a name="new_JSON_new"></a>
### new JSON()
Placeholder for JSON class. The methods below are extension methods
for the builtin JSON type.

<a name="JSON.safeStringify"></a>
### JSON.safeStringify(str, replacer, spaces, cycleRepeater) ⇒ <code>[String](#String)</code>
Safely serialize an object. Circular references will be tagged.

**Kind**: static method of <code>[JSON](#JSON)</code>  
**Returns**: <code>[String](#String)</code> - The serialized version of the object.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>\*</code> | The object to stringify. |
| replacer | <code>function</code> | The custom replace method. This param is optional. |
| spaces | <code>number</code> | The number of spaces to user to 'prettify' the                         serialized string. This param is optional. |
| cycleRepeater | <code>function</code> | The custom replace method for circular references.                                 This param is optional |

**Example**  
```js
var result = JSON.safeStringify(sobeObj); // Serialize, not 'pretty'.
```
**Example**  
```js
var result = JSON.safeStringify(sobeObj, 2); // Serialize, 'prettify' using 2 spaces.
```
**Example**  
```js
var result = JSON.safeStringify(sobeObj, myReplacer);
```
**Example**  
```js
var result = JSON.safeStringify(sobeObj, myReplacer, spaces);
```
**Example**  
```js
var result = JSON.safeStringify(sobeObj, myReplacer, spaces, myCycleReplacer);
```
<a name="JSON.serializer"></a>
### JSON.serializer(replacer, cycleRepeater) ⇒ <code>function</code>
Create a replacer function for stringify that will can handle
             circular references.

**Kind**: static method of <code>[JSON](#JSON)</code>  
**Returns**: <code>function</code> - Returns a serializer function that can be used by stringify.  

| Param | Type | Description |
| --- | --- | --- |
| replacer | <code>function</code> | The custom replace method. This param is optional. |
| cycleRepeater | <code>function</code> | The custom eplace method for circular references.                                 This param is optional |

<a name="String"></a>
## String
**Kind**: global class  

* [String](#String)
  * [new String()](#new_String_new)
  * _instance_
    * [.hashCode(str)](#String+hashCode) ⇒ <code>[String](#String)</code>
    * [.ltrim(str)](#String+ltrim) ⇒ <code>[String](#String)</code>
    * [.rtrim(str)](#String+rtrim) ⇒ <code>[String](#String)</code>
    * [.toCamelCase(str)](#String+toCamelCase) ⇒ <code>[String](#String)</code>
    * [.toTitleCase(str)](#String+toTitleCase) ⇒ <code>[String](#String)</code>
    * [.clone()](#String+clone) ⇒ <code>[String](#String)</code>
    * [.equals(other)](#String+equals) ⇒ <code>boolean</code>
    * [.hashCode()](#String+hashCode) ⇒ <code>[String](#String)</code>
    * [.ltrim()](#String+ltrim) ⇒ <code>[String](#String)</code>
    * [.md5()](#String+md5) ⇒ <code>[String](#String)</code>
    * [.print(params)](#String+print)
    * [.printf(params)](#String+printf)
    * [.rtrim()](#String+rtrim) ⇒ <code>[String](#String)</code>
    * [.sprintf(params)](#String+sprintf) ⇒ <code>[String](#String)</code>
    * [.toCamelCase()](#String+toCamelCase) ⇒ <code>[String](#String)</code>
    * [.toTitleCase()](#String+toTitleCase) ⇒ <code>[String](#String)</code>
  * _static_
    * [.EMPTY](#String.EMPTY) : <code>[String](#String)</code>
    * [.clone(string)](#String.clone) ⇒ <code>[String](#String)</code>
    * [.endsWith(string, suffix)](#String.endsWith) ⇒ <code>boolean</code>
    * [.equals(string, other)](#String.equals) ⇒ <code>boolean</code>
    * [.format(format, params)](#String.format) ⇒ <code>[String](#String)</code>
    * [.generatePassword(length, inclNumbers, inclSymbols)](#String.generatePassword) ⇒ <code>string</code>
    * [.isNullOrEmpty(string)](#String.isNullOrEmpty) ⇒ <code>boolean</code>
    * [.md5(str)](#String.md5) ⇒ <code>[String](#String)</code>
    * [.print(format, params)](#String.print)
    * [.printf(format, params)](#String.printf)
    * [.sprintf(format, params)](#String.sprintf) ⇒ <code>[String](#String)</code>
      * [~r](#String.sprintf..r)
      * [~parts](#String.sprintf..parts)
    * [.startsWith(string, suffix)](#String.startsWith) ⇒ <code>boolean</code>
    * [.toBoolean(string)](#String.toBoolean) ⇒ <code>boolean</code>
    * [.endsWith(suffix)](#String.endsWith) ⇒ <code>boolean</code>
    * [.startsWith(suffix)](#String.startsWith) ⇒ <code>boolean</code>

<a name="new_String_new"></a>
### new String()
Placeholder for String class. The methods below are extension methods
for the builtin String type.

<a name="String+hashCode"></a>
### string.hashCode(str) ⇒ <code>[String](#String)</code>
Generates a hashcode for the current string.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The hashcode for the current string.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>[String](#String)</code> | The string to hash. |

**Example**  
```js
'Hello World'.hashCode();
```
<a name="String+ltrim"></a>
### string.ltrim(str) ⇒ <code>[String](#String)</code>
Creates a copy of the current string with the leading whitespace
removed.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The current string with the leading spaces removed.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>[String](#String)</code> | The string to trim. |

**Example**  
```js
'   Hello World'.ltrim();
```
<a name="String+rtrim"></a>
### string.rtrim(str) ⇒ <code>[String](#String)</code>
Creates a copy of the current string with the trailing whitespace
removed.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The current string with the trailing spaces removed.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>[String](#String)</code> | The string to trim. |

**Example**  
```js
'Hello World   '.rtrim();
```
<a name="String+toCamelCase"></a>
### string.toCamelCase(str) ⇒ <code>[String](#String)</code>
Creates a copy of the current string converted to camel case
based on word breaks. The words may be separated with dash, underscore,
period, or space.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The current string converted to camel case.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>[String](#String)</code> | THe string to convert case. |

**Example**  
```js
'hello_world'.toCamelCase();
```
<a name="String+toTitleCase"></a>
### string.toTitleCase(str) ⇒ <code>[String](#String)</code>
Creates a copy of the current string converted to title case.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The current string converted to title case.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>[String](#String)</code> | The string to convert case. |

**Example**  
```js
'hello world'.toTitleCase();
```
<a name="String+clone"></a>
### string.clone() ⇒ <code>[String](#String)</code>
Returns a new string containing a copy of the current string.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - A copy of the current string.  
**Example**  
```js
var newString = 'Hello World'.clone();
```
<a name="String+equals"></a>
### string.equals(other) ⇒ <code>boolean</code>
Compares the current string to another string.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>boolean</code> - True if the current and other strings are equal. False otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| other | <code>[String](#String)</code> | The string to compare. |

**Example**  
```js
var isEqual = 'string'.equals('string');
```
<a name="String+hashCode"></a>
### string.hashCode() ⇒ <code>[String](#String)</code>
Generates a hashcode for the current string.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The hashcode for the current string.  
**Example**  
```js
'Hello World'.hashCode();
```
<a name="String+ltrim"></a>
### string.ltrim() ⇒ <code>[String](#String)</code>
Creates a copy of the current string with the leading whitespace
removed.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The current string with the leading spaces removed.  
**Example**  
```js
'   Hello World'.ltrim();
```
<a name="String+md5"></a>
### string.md5() ⇒ <code>[String](#String)</code>
Generates a MD5 message digest for the current string instance.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The MD5 message digest for the current string instance.  
**Example**  
```js
'password'.md5();
```
<a name="String+print"></a>
### string.print(params)
Prints a formatted string using the current string as the format string.

**Kind**: instance method of <code>[String](#String)</code>  
**See**: String.format  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>\*</code> | One or more parameters to format into the format string. |

**Example**  
```js
'Hello, my name is {0} {1}.'.print('John', 'Doe');
```
<a name="String+printf"></a>
### string.printf(params)
Prints a formatted string using the current string as the format string.

**Kind**: instance method of <code>[String](#String)</code>  
**See**: String.sprintf  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>\*</code> | One or more parameters to format into the format string. |

**Example**  
```js
'Hello, my name is %s %s, I am %d years old.'.printf('John', 'Doe', 46);
```
<a name="String+rtrim"></a>
### string.rtrim() ⇒ <code>[String](#String)</code>
Creates a copy of the current string with the trailing whitespace
removed.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The current string with the trailing spaces removed.  
**Example**  
```js
'Hello World   '.rtrim();
```
<a name="String+sprintf"></a>
### string.sprintf(params) ⇒ <code>[String](#String)</code>
Formats a string using the current string as the format string.
The format string uses tokens e.g. 'Format string %s, %d, %f'

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The formatted string.  
**See**: String.format  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>\*</code> | One or more parameters to format into the format string. |

**Example**  
```js
'Hello, my name is %s %s, I am %d years old.'.sprintf('John', 'Doe', 46);
```
<a name="String+toCamelCase"></a>
### string.toCamelCase() ⇒ <code>[String](#String)</code>
Creates a copy of the current string converted to camel case
based on word breaks. The words may be separated with dash, underscore,
period, or space.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The current string converted to camel case.  
**Example**  
```js
'hello_world'.toCamelCase();
```
<a name="String+toTitleCase"></a>
### string.toTitleCase() ⇒ <code>[String](#String)</code>
Creates a copy of the current string converted to title case.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The current string converted to title case.  
**Example**  
```js
'hello world'.toTitleCase();
```
<a name="String.EMPTY"></a>
### String.EMPTY : <code>[String](#String)</code>
An empty string.

**Kind**: static constant of <code>[String](#String)</code>  
<a name="String.clone"></a>
### String.clone(string) ⇒ <code>[String](#String)</code>
Makes a deep copy of a string.

**Kind**: static method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The cloned string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>[String](#String)</code> | The string to copy. |

**Example**  
```js
var string2 = String.clone('copy this string');
```
<a name="String.endsWith"></a>
### String.endsWith(string, suffix) ⇒ <code>boolean</code>
Determines if a string ends with another string.

**Kind**: static method of <code>[String](#String)</code>  
**Returns**: <code>boolean</code> - True if string  ends with the suffix string. False otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>[String](#String)</code> | The string to check. |
| suffix | <code>[String](#String)</code> | The string to check for. |

**Example**  
```js
var endsWith = String.endsWith('string', 'ng');
```
<a name="String.equals"></a>
### String.equals(string, other) ⇒ <code>boolean</code>
Compares two strings for equality.

**Kind**: static method of <code>[String](#String)</code>  
**Returns**: <code>boolean</code> - True if strings are equal. False otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>[String](#String)</code> | The first string to compare. |
| other | <code>[String](#String)</code> | The second string to compare. |

**Example**  
```js
var isEqual = String.equals('string', 'string');
```
<a name="String.format"></a>
### String.format(format, params) ⇒ <code>[String](#String)</code>
Formats a string using numbered tokens e.g. 'Format string {0}, {1}, {2}'.

**Kind**: static method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The formatted string.  

| Param | Type | Description |
| --- | --- | --- |
| format | <code>[String](#String)</code> | The format for the string. |
| params | <code>\*</code> | One or more parameters to format into the format string. |

**Example**  
```js
String.format('Hello, my name is {0} {1}.', 'John', 'Doe');
```
<a name="String.generatePassword"></a>
### String.generatePassword(length, inclNumbers, inclSymbols) ⇒ <code>string</code>
Generate a password.

**Kind**: static method of <code>[String](#String)</code>  
**Returns**: <code>string</code> - A new randomly generated password.  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>int</code> | Length of the new password. |
| inclNumbers | <code>boolean</code> | Whether to include numbers in the new password. |
| inclSymbols | <code>boolean</code> | Whether to include symbols in the new password. |

<a name="String.isNullOrEmpty"></a>
### String.isNullOrEmpty(string) ⇒ <code>boolean</code>
Determine if a string is null, undefined, or zero length.

**Kind**: static method of <code>[String](#String)</code>  
**Returns**: <code>boolean</code> - True if null, undefined, or zero length. False otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>[String](#String)</code> | The string to check. |

<a name="String.md5"></a>
### String.md5(str) ⇒ <code>[String](#String)</code>
Generates a MD5 message digest for the current string instance.

**Kind**: static method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The MD5 message digest for the current string instance.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>[String](#String)</code> | The string to compute digest. |

**Example**  
```js
'password'.md5();
```
<a name="String.print"></a>
### String.print(format, params)
Prints a formatted string.

**Kind**: static method of <code>[String](#String)</code>  
**See**: String.format  

| Param | Type | Description |
| --- | --- | --- |
| format | <code>[String](#String)</code> | The format for the string. |
| params | <code>\*</code> | One or more parameters to format into the format string. |

**Example**  
```js
String.print('Hello, my name is {0} {1}.', 'John', 'Doe');
```
<a name="String.printf"></a>
### String.printf(format, params)
Prints a formatted string.

**Kind**: static method of <code>[String](#String)</code>  
**See**: String.sprintf  

| Param | Type | Description |
| --- | --- | --- |
| format | <code>[String](#String)</code> | The format for the string. |
| params | <code>\*</code> | One or more parameters to format into the format string. |

**Example**  
```js
String.printf('Hello, my name is %s %s, I am %d years old.', 'John', 'Doe', 46);
```
<a name="String.sprintf"></a>
### String.sprintf(format, params) ⇒ <code>[String](#String)</code>
Formats a string using tokens e.g. 'Format string %s, %d, %f'.

**Kind**: static method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - The formatted string.  

| Param | Type | Description |
| --- | --- | --- |
| format |  | The format string is composed of zero or more directives: ordinary characters (excluding %) that are copied directly to the result, and conversion specifications, each of which results in fetching its own parameter.<br/> <br/> Each conversion specification consists of a percent sign (%), followed by one or more of these elements, in order:<br/> <br/> <ol style="padding-left: 20px;">   <li>   An optional sign specifier that forces a sign (- or +) to be used on a number. By default,   only the - sign is used on a number if it's negative. This specifier forces positive numbers   to have the + sign attached as well.   </li>   <li>   An optional padding specifier that says what character will be used for padding the results   to the right string size. This may be a space character or a 0 (zero character). The default   is to pad with spaces. An alternate padding character can be specified by prefixing it with   a single quote (').   </li>   <li>   An optional alignment specifier that says if the result should be left-justified or   right-justified. The default is right-justified; a - character here will make it left-justified.   </li>   <li>   An optional number, a width specifier that says how many characters (minimum) this conversion   should result in.   </li>   <li>   An optional precision specifier in the form of a period (`.') followed by an optional   decimal digit string that says how many decimal digits should be displayed for floating-point numbers.   When using this specifier on a string, it acts as a cutoff point, setting a maximum character limit   to the string.   </li>   <li>     A type specifier that says what type the argument data should be treated as.   </li> </ol> <span style="font-weight: bold; padding-left: 20px;">Possible types:</span> <ul>   <li>% - a literal percent character. No argument is required.</li>   <li>b - the argument is treated as an integer, and presented as a binary number.</li>   <li>c - the argument is treated as an integer, and presented as the character with that ASCII value.</li>   <li>d - the argument is treated as an integer, and presented as a (signed) decimal number.</li>   <li>e - the argument is treated as scientific notation (e.g. 1.2e+2). The precision specifier stands     for the number of digits after the decimal point.</li>   <li>E - like %e but uses uppercase letter (e.g. 1.2E+2).</li>   <li>f - the argument is treated as a float, and presented as a floating-point number (locale aware).</li>   <li>F - the argument is treated as a float, and presented as a floating-point number (non-locale aware).</li>   <li>g - shorter of %e and %f.</li>   <li>G - shorter of %E and %f.</li>   <li>o - the argument is treated as an integer, and presented as an octal number.</li>   <li>s - the argument is treated as and presented as a string.</li>   <li>u - the argument is treated as an integer, and presented as an unsigned decimal number.</li>   <li>x - the argument is treated as an integer and presented as a hexadecimal number (with lowercase letters).</li>   <li>X - the argument is treated as an integer and presented as a hexadecimal number (with uppercase letters).</li> </ul> |
| params | <code>\*</code> | One or more parameters to format into the format string. |


  * [.sprintf(format, params)](#String.sprintf) ⇒ <code>[String](#String)</code>
    * [~r](#String.sprintf..r)
    * [~parts](#String.sprintf..parts)

<a name="String.sprintf..r"></a>
#### sprintf~r
Define the regex to match a formatting string
The regex consists of the following parts:
percent sign to indicate the start
(optional) sign specifier
(optional) padding specifier
(optional) alignment specifier
(optional) width specifier
(optional) precision specifier
type specifier:
 % - literal percent sign
 b - binary number
 c - ASCII character represented by the given value
 d - signed decimal number
 f - floating point value
 o - octal number
 s - string
 x - hexadecimal number (lowercase characters)
 X - hexadecimal number (uppercase characters)

**Kind**: inner property of <code>[sprintf](#String.sprintf)</code>  
<a name="String.sprintf..parts"></a>
#### sprintf~parts
Each format string is split into the following parts:
0: Full format string
1: sign specifier (+)
2: padding specifier (0/<space>/'<any char>)
3: if the padding character starts with a ' this will be the real
   padding character
4: alignment specifier
5: width specifier
6: precision specifier including the dot
7: precision specifier without the dot
8: type specifier

**Kind**: inner property of <code>[sprintf](#String.sprintf)</code>  
<a name="String.startsWith"></a>
### String.startsWith(string, suffix) ⇒ <code>boolean</code>
Determines if the string starts with another string.

**Kind**: static method of <code>[String](#String)</code>  
**Returns**: <code>boolean</code> - True if string starts with the preffix string. False otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>[String](#String)</code> | The string to check. |
| suffix | <code>[String](#String)</code> | The string to check for. |

**Example**  
```js
var startsWith = 'string'.startsWith(, 'st');
```
<a name="String.toBoolean"></a>
### String.toBoolean(string) ⇒ <code>boolean</code>
Converts a string to a boolean.

**Kind**: static method of <code>[String](#String)</code>  
**Returns**: <code>boolean</code> - True if the string is 'true' or 'yes'. False otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>[String](#String)</code> | The string to convert to boolean. |

**Example**  
```js
var isTrue = String.toBoolean('true');
```
<a name="String.endsWith"></a>
### String.endsWith(suffix) ⇒ <code>boolean</code>
Determines if the string instance ends with another string.

**Kind**: static method of <code>[String](#String)</code>  
**Returns**: <code>boolean</code> - True if string instance ends with the suffix string. False otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| suffix | <code>[String](#String)</code> | The string to check for. |

**Example**  
```js
var endsWith = 'string'.endsWith('ng');
```
<a name="String.startsWith"></a>
### String.startsWith(suffix) ⇒ <code>boolean</code>
Determines if the string instance starts with another string.

**Kind**: static method of <code>[String](#String)</code>  
**Returns**: <code>boolean</code> - True if string instance starts with the preffix string. False otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| suffix | <code>[String](#String)</code> | The string to check for. |

**Example**  
```js
var startsWith = String.startsWith('string', 'st');
```
