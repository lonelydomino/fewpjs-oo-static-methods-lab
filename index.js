class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize( words ) {
    let items = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let finalArray = [];
    let startingArray = words.split(" ")
    for (let i = 0;i < startingArray.length; i++) {
      if (i == 0) {
        finalArray.push(this.capitalize(startingArray[i]))
      } else {
        if (items.includes(startingArray[i])){
          finalArray.push(startingArray[i])
        } else {
          finalArray.push(this.capitalize( startingArray[i]))
        }
      }

    }
    return finalArray.join(" ");
  }
}