function whatIsInAName(collection, source) {
    var arr = collection.filter(
      obj => Object.keys(source).every(
        sourceKey => obj.hasOwnProperty(sourceKey) && obj [sourceKey] === source[sourceKey]
      )
    );
   
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  