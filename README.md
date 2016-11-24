MANMARU STRINGUTIL JS
===============

<b>manmaru.stringutil.js :</b><br>
Javascript utilities for manipulating and searching strings.<br><br>
<b>functions list :</b><br>
<b>addAt</b>(source, position, addition) -><br>
Adds characters at a specific index<br>
@param source: String to add characters to<br>
@param position: Position in which to add characters<br>
@param addition: String to add<br>
@return String with characters added<br><br>
        
<b>contains</b>(source, search) -><br>
Determines if string contains search string<br>
@param source: String to search in<br>
@param search: String to search for<br>
@return Returns the frequency of the search term found in source string<br><br>
        
<b>getNumbersFromString</b>(source) -><br>
Removes all non numeric characters from string<br>
@param source: String to return numbers from<br>
@return String containing only numbers<br><br>
        
<b>getUniqueCharacters</b>(source) -><br>
Extracts all the unique characters from a source String<br>
@param source: String to find unique characters within<br>
@return String containing unique characters from source String<br><br>
        
<b>remove</b>(source, remove) -><br> 
Removes characters from a source string<br> 
@param source: String to remove characters from<br> 
@param remove: String describing characters to remove<br> 
@return String with characters removed<br> <br> 
        
<b>removeAt</b>(source, position) -><br> 
Removes a character at a specific index<br>
@param source: String to remove character from<br>
@param position: Position of character to remove<br>
@return String with character removed<br><br>

<b>removeNumbersFromString</b>(source) -><br>
Removes all numeric characters from string<br>
@param source: String to remove numbers from<br>
@return String with numbers removed<br><br>
        
<b>removeWhitespace</b>(source) -><br>
Removes tabs, linefeeds, carriage returns and spaces from string<br>
@param source: String to remove whitespace from<br>
@return String with whitespace removed<br><br>

<b>replace</b>(source, remove, replace) -><br>
Replaces target characters with new characters<br>
@param source: String to replace characters from<br>
@param remove: String describing characters to remove<br>
@param replace: String to replace removed characters<br>
@return String with characters replaced<br><br>
        
<b>replaceAt</b>(source, position, replace) -><br>
Replaces a character at a specific index with new characters<br>
@param source: String to replace characters from<br>
@param position: Position of character to replace<br>
@param replace: String to replace removed character<br>
@return String with character replaced<br><br>

<b>toTitleCase</b>(source) -><br>
Transforms source string to per word capitalization.<br>
@param source: String to return as title cased.<br>
@return String with capitalized words.<br><br>

<b>urlValue</b>(name, string) -><br>
Get value of string with URLFormat <br>
@param name Example: &var1=mi_var1&var2=mi_var2&var3=mi_var3<br>
StringUtil.urlValue('var2')<br>
@return String mi_var2<br><br>
        
<b>urlFriendly</b>(source, max) -> <br>
Transform source string in url string format<br>
@param source: String to return as url format<br>
@return string<br><br>
        
<b>pathVars</b>(str, number_return) -><br>
Transform source url string in array<br>
@param source: url string to return in array<br>
@return array<br><br>

<b>utf8Encode</b>(source) -><br>
UTF8 Encode<br>
@param source: string to encode<br>
@return encoded UTF8 String<br><br>

<b>utf8Decode</b>(source) -><br>
UTF8 Decode<br>
@param source: string to Decode<br>
@return Decode UTF8 String<br><br>
        
<b>lnToBr</b>(source) -><br>
Transform \n to br<br>
@param source: String<br>
@return String<br><br>
    
<b>brToLn</b>(source) -><br>
Transform br to \n<br>
@param source: String<br>
@return String<br><br><br>
<b>How to use:</b><br>
StringUtil.functionName("param");<br>
<br>
<b>Example of use :</b><br>
var testString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";<br>
console.log(StringUtil.removeWhitespace(testString));<br>
return -> Loremipsumdolorsitamet,consecteturadipiscingelit

