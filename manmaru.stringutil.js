/**
	Utilities for manipulating and searching Strings. 
	Inspired from CASA Lib / AS 2.0 (v.05/09/07) - Aaron Clinger, Mike Creighton
	
	@author Adrien Dufond - manmaru, Inc.
	@src https://github.com/adrien-dufond/
	@version 0.1
	@since 18/06/2013
	
	Distributed under the terms of the MIT license.
	http://www.opensource.org/licenses/mit-license.html
*/

StringUtil = (function() {
	
   function StringUtil() {}
   
	/**
		Adds characters at a specific index.
		@param source: String to add characters to.
		@param position: Position in which to add characters.
		@param addition: String to add.
		@return String with characters added.
	*/
	StringUtil.addAt = function(source, position, addition) {
		var parts = source.split('');
		parts.splice(position, 0, addition);
		return parts.join('');
	}
	
	
	/**
		Determines if string contains search string.
		@param source: String to search in.
		@param search: String to search for.
		@return Returns the frequency of the search term found in source string.
	*/
	StringUtil.contains = function(source, search) {
		var i     = source.indexOf(search);
		var total = 0;
		while (i > -1) {
			i = source.indexOf(search, i + 1);
			total++;
		}
		return total;
	}
	
	/**
		Removes all non numeric characters from string.
		@param source: String to return numbers from.
		@return String containing only numbers.
	*/
	StringUtil.getNumbersFromString = function(source) {
		var i = -1;
		while (++i < source.length) {
			if (isNaN(source.charAt(i))) {
				source = StringUtil.removeAt(source, i);
				i--;
			}
		}
		return source;
	}
	
	/**
		Extracts all the unique characters from a source String.
		@param source: String to find unique characters within.
		@return String containing unique characters from source String.
	*/
	StringUtil.getUniqueCharacters = function(source) {
		var unique = '';
		var i      = -1;
		var char;
		while (++i < source.length){
			char = source.charAt(i);
			if (unique.indexOf(char) == -1) { unique += char; }	
		}
		return unique;
	}
	
	/**
		Removes characters from a source string.
		@param source: String to remove characters from.
		@param remove: String describing characters to remove.
		@return String with characters removed.
	*/
	StringUtil.remove = function(source, remove) {
		return StringUtil.replace(source, remove, '');
	}
	
	/**
		Removes a character at a specific index.
		@param source: String to remove character from.
		@param position: Position of character to remove.
		@return String with character removed.
	*/
	StringUtil.removeAt = function(source, position) {
		return StringUtil.replaceAt(source, position, '');
	}
	
	/**
		Removes all numeric characters from string.
		@param source: String to remove numbers from.
		@return String with numbers removed.
	*/
	StringUtil.removeNumbersFromString = function(source) {
		var i = -1;
		while (++i < source.length) {
			if (!isNaN(source.charAt(i))) {
				source = StringUtil.removeAt(source, i);
				i--;
			}
		}
		return source;
	}
	
	/**
		Removes tabs, linefeeds, carriage returns and spaces from string.
		@param source: String to remove whitespace from.
		@return String with whitespace removed.
	*/
	StringUtil.removeWhitespace = function(src) {
    		return src.replace( /\s/g, ""); 
    	}
    
	 /**
		Replaces target characters with new characters.
		@param source: String to replace characters from.
		@param remove: String describing characters to remove.
		@param replace: String to replace removed characters.
		@return String with characters replaced.
	*/
    	StringUtil.replace = function(source, remove, replace) {
		return source.split(remove).join(replace);
	}
	
	/**
		Replaces a character at a specific index with new characters.
		@param source: String to replace characters from.
		@param position: Position of character to replace.
		@param replace: String to replace removed character.
		@return String with character replaced.
	*/
	StringUtil.replaceAt = function(source, position, replace) {
		var parts = source.split('');
		parts.splice(position, 1, replace);
		return parts.join('');
	}
	
	/**
		Transforms source string to per word capitalization.
		@param source: String to return as title cased.
		@return String with capitalized words.
	*/
	StringUtil.toTitleCase = function(source) {
		var w = source.split(' ');
		var i = -1;
		while (++i < w.length)
			w[i] = StringUtil.replaceAt(w[i], 0, w[i].charAt(0).toUpperCase());
		return w.join(' ');
	}
	
	/**
		Get value of string with URLFormat 
		@param name Example: &var1=mi_var1&var2=mi_var2&var3=mi_var3
		StringUtil.urlValue('var2')
		@return String mi_var2
	*/
	StringUtil.urlValue = function(name, string){
		if(!string) string = window.location.href;
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp ( regexS );
		var tmpURL = string;
		var results = regex.exec( tmpURL );
		if( results == null )
			return"";
		else
			return results[1];
	};
	
	/**
		Transform source string in url string format.
		@param source: String to return as url format.
		@return string
	*/
	StringUtil.urlFriendly = function(source, max) {
		if (max === undefined) max = 255;
        	var a_chars = new Array();
                a_chars.push(new Array("a",/[áàâãªÁÀÂÃ]/g));
                a_chars.push(new Array("e",/[éèêëÉÈÊË]/g));
                a_chars.push(new Array("i",/[íìîïÍÌÎÏ]/g));
                a_chars.push(new Array("o",/[òóôõöÓÒÔÕÖ]/g));
                a_chars.push(new Array("u",/[úùûüÚÙÛÜ]/g));
                a_chars.push(new Array("c",/[çÇ]/g));
                a_chars.push(new Array("n",/[Ññ]/g));
                a_chars.push(new Array("-",/[.]/g));
                a_chars.push(new Array("",/['"()\[\]/*++\¿?#@$º&*^·,.!¡%=+|]/g));
        for(var i=0; i < a_chars.length; i++)
            source = source.replace(a_chars[i][1], a_chars[i][0]);
		return source.replace(/\s+/g,'-').replace(/\_+/g,'-').toLowerCase().replace(/\-{2,}/g,'-').replace(/(^\s*)|(\s*$)/g, '').substr(0,max);
	};
	
	/**
		Transform source url string in array.
		@param source: url string to return in array.
		@return array.
	*/
	StringUtil.pathVars = function(str, number_return){
	        if(number_return == undefined) number_return = false;
	        str = str.split("/");
	        var array = new Array();
	        for(var i = 0; i < str.length; i++){
	            if(str[i]){
	                str[i] = jQuery.trim(str[i]);
	                if(number_return){
	                    var number = parseInt(str[i]);
	                    if(number) str[i] = number;
	                }
	                array.push(str[i]);
	            }
	        }
		return array;
	};
   
   	/**
		UTF8 Encode
		@param source: string to encode.
		@return encoded UTF8 String.
	*/  
	StringUtil.utf8Encode = function(source) {
		source = source.replace(/\r\n/g,"\n");
		var utftext = "";
		for (var n = 0; n < source.length; n++) {
			var c = source.charCodeAt(n);
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
		}
		return utftext;
	};
	
   	/**
		UTF8 Decode 
		@param source: string to Decode.
		@return Decode UTF8 String.
	*/  
   	StringUtil.utf8Decode = function(source) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
		while ( i < source.length ) {
			c = source.charCodeAt(i);
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	};
	
	/**
		Transform \n to <br>.
		@param source: String.
		@return String.
	*/
	StringUtil.lnToBr = function(source){
        	return source.replace(/\r?\n/g, '<br>');
	};
   
	/**
		Transform <br> to \n.
		@param source: String.
		@return String.
	*/
    	StringUtil.brToLn = function(source){
        	return source.replace(/<br\s*[\/]?>/gi, "\n");
   	};
	
    return StringUtil;
    
})();
