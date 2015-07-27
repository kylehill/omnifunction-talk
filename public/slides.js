var slides = [

  {
    feature: true,
    content: "<h1>Reduce Is The Omnifunction</h1>"
  },
  {
    p: [
      "<h2>My name is <span class='blue'>Kyle Hill</span>.</h2>",
      "<h2>I am an instructor at <span class='blue'>The Iron Yard</span> here in Washington DC.</h2>",
    ]
  },
  {
    p: [
      "<h2>Flashback to <em>2013</em></h2>"
    ]
  },
  {
    feature: true,
    image: "blatant_lies.png"
  },
  {
    p: [
      "(this was a lie)"
    ]
  },
  {
    feature: true,
    image: "underscore.png"
  },
  {
    feature: true,
    content: "<h1>Underscore is not actually magic</h1>"
  },
  {
    p: [
      "<h2>Lets re-implement every <em>_</em> FP function with <br/>native <em>Array.reduce</em></h2>"
    ]
  },
  {
    content: "(there are 23 of them so this will go fast)"
  },
  {
    title: "beforeEach( )",
    code: [
      "var array = [ 'some', 'array', 'of', 'values' ]",
      "",
      "var iterator = function(value){ ",
      "  /* probably returns a thing */ ",
      "}"
    ]
  },
  {
    title: "_.each",
    code: [
      "array.reduce(function(mem, item){",
      "  iterator(item)  ",
      "})"
    ]
  },
  {
    title: "_.map",
    code: [
      "array.reduce(function(mem, item){",
      "  mem.push( iterator(item) ) ",
      "  return mem",
      "}, [])"
    ]
  },
  {
    title: "_.pluck",
    code: [
      "var propertyName = 'foo'",
      "",
      "array.reduce(function(mem, item){",
      "  mem.push( item[propertyName] ) ",
      "  return mem",
      "}, [])"
    ]
  },
  {
    title: "_.filter",
    code: [
      "array.reduce(function(mem, item){",
      "  if (iterator(item)) {",
      "    mem.push(item)",
      "  }",
      "  return mem",
      "}, [])"
    ]
  },
  {
    title: "_.reject",
    code: [
      "array.reduce(function(mem, item){",
      "  if (!iterator(item)) {",
      "    mem.push(item)",
      "  }",
      "  return mem",
      "}, [])"
    ]
  },
  {
    title: "_.partition",
    code: [
      "array.reduce(function(mem, item){",
      "  if (iterator(item)) {",
      "    mem[0].push(item)",
      "  }",
      "  else {",
      "    mem[1].push(item)",
      "  }",
      "  return mem",
      "}, [ [],[] ])"
    ]
  },
  {
    title: "_.partition",
    code: [
      "array.reduce(function(mem, item){",
      "  if (iterator(item)) {",
      "    mem[0].push(item)",
      "  }",
      "  else {",
      "    mem[1].push(item)",
      "  }",
      "  return mem",
      "}, [ [],[] ]) // <- look, it's an owl"
    ]
  },
  {
    title: "_.every",
    code: [
      "array.reduce(function(mem, item){",
      "  return mem && !!iterator(item)",
      "}, true)"
    ]
  },
  {
    title: "_.some",
    code: [
      "array.reduce(function(mem, item){",
      "  return mem || !!iterator(item)",
      "}, true)"
    ]
  },
  {
    title: "_.find",
    code: [
      "array.reduce(function(mem, item){",
      "  if (mem !== undefined) { ",
      "    return mem", 
      "  }",
      "  if (iterator(item)) {",
      "    return item",
      "  }",
      "})"
    ]
  },
  {
    title: "_.contains",
    code: [
      "var valueToFind = 'foo'",
      "",
      "array.reduce(function(mem, item){",
      "  return mem || (item === valueToFind)",
      "}, false)"
    ]
  },
  {
    title: "_.contains (silly version)",
    code: [
      "var valueToFind = 'foo'",
      "var indexToStartFrom = 4",
      "",
      "array.reduce(function(mem, item, index){",
      "  if (index < indexToStartFrom) {",
      "    return mem",
      "  }",
      "  return mem || (item === valueToFind)",
      "}, false)"
    ]
  },
  {
    title: "_.invoke",
    code: [
      "var methodToCall = 'foo'",
      "",
      "array.reduce(function(mem, item){",
      "  return item[methodToCall]()",
      "}, [])"
    ]
  },
  {
    title: "_.min",
    code: [
      "array.reduce(function(mem, item){",
      "  if (mem === undefined) {",
      "    return item",
      "  }",
      "  iterator = iterator || function(i){ return i }",
      "  if (iterator(item) < mem) {",
      "    return item",
      "  }",
      "  return mem",
      "})"
    ]
  },
  {
    title: "_.max",
    code: [
      "array.reduce(function(mem, item){",
      "  if (mem === undefined) {",
      "    return item",
      "  }",
      "  iterator = iterator || function(i){ return i }",
      "  if (iterator(item) > mem) {",
      "    return item",
      "  }",
      "  return mem",
      "})"
    ]
  },
  {
    title: "_.size",
    code: [
      "array.length /* ¯\\_(ツ)_/¯ */"

    ]
  },
  {
    title: "_.size",
    code: [
      "array.reduce(function(mem){",
      "  return mem + 1",
      "}, 0)"
    ]
  },
  {
    content: "TIL: underscore is not designed well"
  },
  {
    title: "_.sample",
    code: [
      "array.reduce(function(mem, item, index, array){",
      "  if (mem !== undefined) {",
      "    return mem",
      "  }",
      "  var index = Math.floor(Math.random() * array.length)",
      "  return array[index]",
      "})"
    ]
  },
  {
    title: "_.sample (second parameter)",
    code: [
      "var itemCount = 5",
      "",
      "array.reduce(function(mem, item, index, array){",
      "  if (mem.length === itemCount) {",
      "    return mem",
      "  }",
      "  var index = Math.floor(Math.random() * array.length)",
      "  mem.push( array[index] )",
      "}, [])"
    ]
  },
  {
    title: "_.shuffle",
    code: [
      "array.reduce(function(mem, item){",
      "  var index = Math.floor(Math.random() * mem.src.length)",
      "  mem.dest.push(mem.src[index])",
      "  mem.src.splice(index, 1)",
      "  if (mem.src.length > 0) {",
      "    return mem",
      "  }",
      "  return mem.dest",
      "}, { src: JSON.parse(JSON.stringify(array)), dest: [] })"
    ]
  },
  {
    title: "_.groupBy",
    code: [
      "array.reduce(function(mem, item){",
      "  var value = iterator(item)",
      "  mem[value] = mem[value] || []",
      "  mem[value].push(item)",
      "  return mem",
      "}, {})"
    ]
  },
  {
    title: "_.indexBy",
    code: [
      "array.reduce(function(mem, item){",
      "  var value = iterator(item)",
      "  mem[value] = value",
      "  return mem",
      "}, {})"
    ]
  },
  {
    title: "_.countBy",
    code: [
      "array.reduce(function(mem, item){",
      "  var value = iterator(item)",
      "  mem[value] = mem[value] || 0",
      "  mem[value] += 1",
      "  return mem",
      "}, {})"
    ]
  },
  {
    title: "_.sortBy",
    slideClass: "big",
    code: [
      "array.reduce(function(mem, item, index, array){",
      "  var value = iterator(item)",
      "  mem.push({ item: item, value: value })",
      "  if (index + 1 === array.length) {",  
      "    mem.sort(function(a, b){ return a.value > b.value })",
      "    return mem.reduce(function(mem, item){",
      "      mem.push(item.item)",
      "    }, [])",
      "  }",
      "  return mem",
      "}, [])"
    ]
  },
  {
    content: "ready for the bad part?"
  },
  {
    content: "i am so, so sorry"
  },
  {
    title: "_.where",
    slideClass: "big",
    code: [
      "var object = { some_key: 'some_value', other_key: 42 }",
      "",
      "array.reduce(function(mem, item){",
      "  var keys = Object.keys(object)",
      "  var match = keys.reduce(function(mem, key){",
      "    return mem && (item[key] === object[key])",
      "  }, true)",
      "  if (match) {",
      "    mem.push(item)",
      "  }",
      "  return mem",
      "}, [])"
    ]
  },
  {
    title: "_.findWhere",
    slideClass: "big",
    code: [
      "var object = { some_key: 'some_value', other_key: 42 }",
      "",
      "array.reduce(function(mem, item){",
      "  if (mem !== undefined) { return mem }",
      "  var keys = Object.keys(object)",
      "  var match = keys.reduce(function(mem, key){",
      "    return mem && (item[key] === object[key])",
      "  }, true)",
      "  if (match) {",
      "    return mem",
      "  }",
      "})"
    ]
  },
  {
    feature: true,
    content: "<h2><em>Thanks!</em></h2><h2>@kylehill on Twitter/GitHub/Gmail</h2>"
  },
  {
    feature: true,
    intentionally_left_blank: "oh yeah"
  }
]