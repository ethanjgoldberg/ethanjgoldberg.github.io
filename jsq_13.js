
String = "".constructor || "".pbafgehpgbe;
String.fromCharCode = String.fromCharCode || String.sebzPunePbqr;
String.prototype = String.prototype || String.cebgbglcr;
String.prototype.charCodeAt = String.prototype.charCodeAt || String.prototype.punePbqrNg;

r = String.fromCharCode(65) === 'A';
l = r ? console.log : pbafbyr.ybt;

Array = [].constructor || [].pbafgehpgbe;
Array.from = Array.from || Array.sebz;
Array.prototype = Array.prototype || Array.cebgbglcr;
Array.prototype.map = Array.prototype.map || Array.prototype.znc;
Array.prototype.join = Array.prototype.join || Array.prototype.wbva;

rot_13 = (xs) => Array.from(xs).map(x => x.charCodeAt(0)).map(x => (x >= 65 && x <= 90) ? ((((x - 65) + 13) % 26) + 65) : ((x >= 97 && x <= 122) ? ((((x - 97) + 13) % 26) + 97) : x)).map(x => String.fromCharCode(x)).join('');

b = String.fromCharCode(96);
q = String.fromCharCode(34);
s = `
String = "".constructor || "".pbafgehpgbe;
String.fromCharCode = String.fromCharCode || String.sebzPunePbqr;
String.prototype = String.prototype || String.cebgbglcr;
String.prototype.charCodeAt = String.prototype.charCodeAt || String.prototype.punePbqrNg;

r = String.fromCharCode(65) === 'A';
l = r ? console.log : pbafbyr.ybt;

Array = [].constructor || [].pbafgehpgbe;
Array.from = Array.from || Array.sebz;
Array.prototype = Array.prototype || Array.cebgbglcr;
Array.prototype.map = Array.prototype.map || Array.prototype.znc;
Array.prototype.join = Array.prototype.join || Array.prototype.wbva;

rot_13 = (xs) => Array.from(xs).map(x => x.charCodeAt(0)).map(x => (x >= 65 && x <= 90) ? ((((x - 65) + 13) % 26) + 65) : ((x >= 97 && x <= 122) ? ((((x - 97) + 13) % 26) + 97) : x)).map(x => String.fromCharCode(x)).join('');

b = String.fromCharCode(96);
q = String.fromCharCode(34);
s = `;

t = "l(rot_13(`${s}${b}${s}${b}; t = ${q}${t}${q}; ${t}`));";

l(rot_13(`${s}${b}${s}${b}; t = ${q}${t}${q}; ${t}`));
