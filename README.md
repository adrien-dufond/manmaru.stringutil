MANMARU STRINGUTIL JS
===============

<b>manmaru.stringutil.js :</b><br>
Javascript utilities for manipulating and searching strings.<br><br>
<b>functions list :</b><br>
<b>addAt</b>(source, position, addition) -> Adds characters at a specific index.<br>
<b>contains</b>(source, search) -> Determines if string contains search string.<br>
<b>getNumbersFromString</b>(source) -> Removes all non numeric characters from string.<br>
<b>getUniqueCharacters</b>(source) -> Extracts all the unique characters from a source String.<br>
<b>remove</b>(source, remove) -> Removes characters from a source string.<br>
<b>removeAt</b>(source, position) -> Removes a character at a specific index.<br>
<b>removeNumbersFromString</b>(source) -> Removes all numeric characters from string.<br>
<b>removeWhitespace</b>(source) -> Removes tabs, linefeeds, carriage returns and spaces from string.<br>
<b>replace</b>(source, remove, replace) -> Replaces target characters with new characters.<br>
<b>replaceAt</b>(source, position, replace) -> Replaces a character at a specific index with new characters.<br>
<b>toTitleCase</b>(source) -> Transforms source string to per word capitalization.<br>
<b>urlValue</b>(name, string) -> Get value of string with URLFormat.<br>
<b>urlFriendly</b>(source, max) -> Transform source string in url string format.<br>
<b>pathVars</b>(str, number_return) -> Transform source url string in array.<br>
<b>utf8Encode</b>(source) -> UTF8 Encode.<br>
<b>utf8Decode</b>(source) -> UTF8 Decode.<br>
<b>lnToBr</b>(source) -> Transform \n to br. <br>
<b>brToLn</b>(source) -> Transform br to \n. <br><br><br>
<b>How to use:</b><br>
StringUtil.functionName("param");<br>
<br>
<b>example :</b><br>
var testString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";<br>
console.log(StringUtil.removeWhitespace(testString));<br>
return -> Loremipsumdolorsitamet,consecteturadipiscingelit

