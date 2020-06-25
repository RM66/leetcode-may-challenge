/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;

  var rNoteDict = {};
  var magazDict = {};

  for (var i = 0; i < magazine.length; i++) {
    var rNoteChar = ransomNote[i];
    var magazChar = magazine[i];
    if (rNoteChar) {
      if (rNoteDict[rNoteChar]) rNoteDict[rNoteChar]++;
      else rNoteDict[rNoteChar] = 1;
    }
    if (magazDict[magazChar]) magazDict[magazChar]++;
    else magazDict[magazChar] = 1;
  }

  for (var [letter, count] of Object.entries(rNoteDict)) {
    if (!magazDict[letter] || magazDict[letter] < count) return false;
  }

  return true;
};

/*
126 / 126 test cases passed.
Status: Accepted
Runtime: 80 ms
Memory Usage: 37.9 MB
*/
