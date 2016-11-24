MANMARU STRINGUTIL JS
===============

Some based on Aaron Clinger CASA Lib ActionScript library<br>
http://casalib.org/<br><br>

<b>manmaru.stringutil.js :</b><br>
Javascript utilities for manipulating and searching Strings.<br><br>
<b>functions list :</b><br>
<b>addAt</b> -> Adds characters at a specific index.<br>
<b>contains</b> -> Determines if string contains search string.<br>
<b>getNumbersFromString</b> -> Removes all non numeric characters from string.<br>
<b>getUniqueCharacters</b> -> Extracts all the unique characters from a source String.<br>
<b>remove</b> -> Removes characters from a source string.<br>
<b>removeAt</b> -> Removes a character at a specific index.<br>
<b>removeNumbersFromString</b> -> Removes all numeric characters from string.<br>
<b>removeWhitespace</b> -> Removes tabs, linefeeds, carriage returns and spaces from string.<br>
<b>replace</b> -> Replaces target characters with new characters.<br>
<b>replaceAt</b> -> Replaces a character at a specific index with new characters.<br>
<b>toTitleCase</b> -> Transforms source string to per word capitalization.<br>
<b>urlValue</b> -> Get value of string with URLFormat.<br>
<b>urlFriendly</b> -> Transform source string in url string format.<br>
<b>pathVars</b> -> Transform source url string in array.<br>
<b>utf8Encode</b> -> UTF8 Encode.<br>
<b>utf8Decode</b> -> UTF8 Decode.<br>
<b>lnToBr</b> -> Transform \n to br. <br>
<b>brToLn</b> -> Transform br to \n. <br><br><br>
<b>How to use:</b><br>
StringUtil.functionName("param");<br>
<br>
example :<br>
var testString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";<br>
console.log(StringUtil.removeWhitespace(testString));<br>
return -> Loremipsumdolorsitamet,consecteturadipiscingelit

