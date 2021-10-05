(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[7597],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4378:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o=["components"],s={id:"basic-concepts",sidebar_position:3,slug:"./basic-concepts",title:"Basic Concepts"},l="Basic concepts of immutable Rimbu collections",c={unversionedId:"basic-concepts",id:"basic-concepts",isDocsHomePage:!1,title:"Basic Concepts",description:"TL;DR",source:"@site/docs/basic-concepts.mdx",sourceDirName:".",slug:"/basic-concepts",permalink:"/docs/basic-concepts",editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/basic-concepts.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"basic-concepts",sidebar_position:3,slug:"./basic-concepts",title:"Basic Concepts"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Immutable collections",permalink:"/docs/collections/"}},m=[{value:"TL;DR",id:"tldr",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Constructing instances",id:"constructing-instances",children:[{value:"Empty instances",id:"empty-instances",children:[]},{value:"Instances with given values",id:"instances-with-given-values",children:[]},{value:"Instances from other sources",id:"instances-from-other-sources",children:[]},{value:"Collection Builders",id:"collection-builders",children:[]}]},{value:"Changing immutable instances",id:"changing-immutable-instances",children:[]},{value:"Non-emptiness",id:"non-emptiness",children:[{value:"Less checking",id:"less-checking",children:[]},{value:"Helping the compiler with .nonEmpty()",id:"helping-the-compiler-with-nonempty",children:[]}]},{value:"Error modes and fallback values",id:"error-modes-and-fallback-values",children:[]}],u={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-concepts-of-immutable-rimbu-collections"},"Basic concepts of immutable Rimbu collections"),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Construct TypeScript collection instances with provided ",(0,r.kt)("strong",{parentName:"li"},"constructor methods"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"List.empty<number>()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"HashMap.of([1, 'a'], [2, 'b'])")))),(0,r.kt)("li",{parentName:"ul"},"To ",(0,r.kt)("strong",{parentName:"li"},'"change"')," an immutable instance, the resulting ",(0,r.kt)("strong",{parentName:"li"},"reference needs to be stored"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"const newList = oldList.append(4).prepend(3)")))),(0,r.kt)("li",{parentName:"ul"},"All instances with a type name that ends with ",(0,r.kt)("inlineCode",{parentName:"li"},".NonEmpty")," are ",(0,r.kt)("strong",{parentName:"li"},"guaranteed")," to have at least 1 value.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NonEmpty collections have a ",(0,r.kt)("strong",{parentName:"li"},"simpler API"),"."),(0,r.kt)("li",{parentName:"ul"},"NonEmpty types remove the need to ",(0,r.kt)("strong",{parentName:"li"},"check for emptiness"),"."))),(0,r.kt)("li",{parentName:"ul"},"All collections have a mutable ",(0,r.kt)("inlineCode",{parentName:"li"},"Builder")," that can be used to perform bulk changes with when needed."),(0,r.kt)("li",{parentName:"ul"},"All methods that can 'fail' like ",(0,r.kt)("inlineCode",{parentName:"li"},"List.get(index)")," offer a choice of ",(0,r.kt)("strong",{parentName:"li"},"Error Mode"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List.get(10)")," returns undefined if the index is out of bounds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List.get(10, Err)")," throws an error if the index is out of bounds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List.get(10, 4)")," returns 4 if ths index is out of bounds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List.get(10, () => computeLargePrime())")," returns the result from the given function if the index is out of bounds")))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This section describes some basic concepts of Rimbu immutable collections that ares shared amongst all types of collections. Knowing these basics enables a quick start in using the collections in the right way."),(0,r.kt)("h2",{id:"constructing-instances"},"Constructing instances"),(0,r.kt)("p",null,"Because immutable collection instances, of course, can't be mutated, each instance needs to be constructed from the data it contains. Every collection exposes a number of constructor methods. They are attached to the collection's namespace."),(0,r.kt)("h3",{id:"empty-instances"},"Empty instances"),(0,r.kt)("p",null,"To create an empty instance, one can use the ",(0,r.kt)("inlineCode",{parentName:"p"},".empty()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { List, HashMap } from '@rimbu/core';\n\n// create an empty List of numbers\nconst list1 = List.empty<number>();\n\n// create an empty List of strings\nconst list2 = List.empty<string>();\n\n// create an empty HashMap with keys of type number, and values of type string\nconst map1 = HashMap.empty<number, string>();\n\n// create an empty HashMap with keys of type string, and values of type boolean\nconst map2 = HashMap.empty<string, boolean>();\n")),(0,r.kt)("h3",{id:"instances-with-given-values"},"Instances with given values"),(0,r.kt)("p",null,"To create an instance with immediately given values, the collections offer the ",(0,r.kt)("inlineCode",{parentName:"p"},".of(...)")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { List, HashMap } from '@rimbu/core';\n\n// Create a List with given number values\nconst list1 = List.of(1, 2, 3);\n\n// Create a List with given string values\nconst list2 = List.of('a', 'b', 'c');\n\n// Create a HashMap with given key-value entries\nconst map1 = HashMap.of([1, 'a'], [2, 'b']);\n\n// Create a HashMap with given key-value entries\nconst map2 = HashMap.of(['a', true], ['b', false]);\n")),(0,r.kt)("h3",{id:"instances-from-other-sources"},"Instances from other sources"),(0,r.kt)("p",null,"It is also possible to create collections from other ",(0,r.kt)("inlineCode",{parentName:"p"},"Iterable")," sources, like Arrays, Streams, or even other collection instances. The ",(0,r.kt)("inlineCode",{parentName:"p"},".from(...)")," constructor method does this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { List, HashSet } from '@rimbu/core';\n\nconst array = [1, 2];\n\n// Create a List with the elements from the array\nconst list1 = List.from(array);\n\n// Create a List with the elements from the array, three times\nconst list2 = List.from(array, array, array);\n\n// Convert the last list to a HashSet\nconst set = HashSet.from(list2);\n")),(0,r.kt)("h3",{id:"collection-builders"},"Collection Builders"),(0,r.kt)("p",null,"Every method of an immutable collection instance that modifies the content will return a new instance (if it actually modified the content). While it is easy to chain methods, this may not always be the most efficient."),(0,r.kt)("p",null,"When it does not suffice to use the methods above, or if they would lead to many intermediate instances, it is possible to use Builders to create mutable instances. A Builder is a mutable collection instance that can be converted to an immutable instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { List } from '@rimbu/core';\n\n// Create a mutable List builder\nconst lb = List.builder<number>();\n\n// Manipulate the builder\nfor (let i = 0; i < 20; i++) {\n  if (i % 2 === 0) lb.append(i);\n  else lb.prepend(i);\n}\n\n// Create an immutable instance with the builder's contents\nconst list = lb.build();\n")),(0,r.kt)("p",null,"It's also possible to easily convert to and from a builder for each collection, as the following code demonstrates for a ",(0,r.kt)("inlineCode",{parentName:"p"},"List"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { List, Stream } from '@rimbu/core';\n\nconst list = List.from(Stream.range({ amount: 10 });\nconst builder = list.toBuilder();\n\nfor (let i = 0; i < 20; i++) {\n  builder.insert(i, i);\n}\n\nconst list2 = builder.build();\n")),(0,r.kt)("p",null,"In this way, it is always possible to choose the mode that is the best fit for a specific situation."),(0,r.kt)("h2",{id:"changing-immutable-instances"},"Changing immutable instances"),(0,r.kt)("p",null,"Every collection offers basic methods to manipulate or process the contained data. Keep in mind that it is never possible to change the data in the collection, as the following example illustrates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { List } from '@rimbu/core';\n\nconst list = List.of(1, 2, 3);\nconsole.log(list.toString());\n// List(1, 2, 3)\n\n// Remove the item at index 1\nlist.remove(1);\n\nconsole.log(list.toString());\n// => List(1, 2, 3)\n// the item is still there!\n\n// we need to assign the result to a new variable\nconst list2 = list.remove(1);\n\nconsole.log(list2.toString());\n// => List(1, 3)\n")),(0,r.kt)("p",null,"When changing immutable instances, Rimbu takes care to do the minimum amount of work possible. For example, if an operation does not actually change the data, often a reference to the same instance is returned. The can also help to determine if an operation actually changed anything."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { HashSet } from '@rimbu/core';\n\nconst set1 = HashSet.of(1, 2, 3);\n// add an element that was already present\nconst set2 = set1.add(2);\nconsole.log(set1 === set2);\n// => true\n// the object references are equal\n\n// how can we easily determine if the element to remove was present?\nconst set3 = set1.remove(5);\n\n// answer: check the result object equality\nif (set3 === set1) console.log('nothing changed');\nelse console.log('element was removed');\n// => logs 'nothing changed'\n")),(0,r.kt)("h2",{id:"non-emptiness"},"Non-emptiness"),(0,r.kt)("p",null,"When creating immutable instances with given elements, the compiler will indicate through its type that the collection is inferred to be non-empty:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { List } from '@rimbu/core';\n\nconst list = List.of(1, 2, 3);\n// type of list: List.NonEmpty<number>\n")),(0,r.kt)("p",null,"This has an impact on the methods that the instance offers. Certain methods will require less checking or exception values, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { List } from '@rimbu/core';\n\nconst list = List.of(1, 2, 3);\nconst list2 = list as List<number>;\n\nconst f1 = list.first();\n// type is number\nconst f2 = list2.first();\n// type is number | undefined\nconst f3 = list2.first(0);\n// type is number\nlist.first(0);\n// compiler error! cannot provide fallback value because first cannot fail\n")),(0,r.kt)("h3",{id:"less-checking"},"Less checking"),(0,r.kt)("p",null,"Having non-empty types also makes it easier to create functions that no longer need to check whether their arguments are empty:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { List } from '@rimbu/core';\n\n// old way\nfunction exec1(list: List<number>): number {\n  // need to check for emptiness\n  if (list.isEmpty) throw Error('cannot handle empty list');\n\n  // need to provide fallback values\n  return (list.first(0) + list.last(0)) / 2;\n}\n\n// better way\nfunction exec2(list: List.NonEmpty<number>): number {\n  // no need to check for emptiness\n  // no need to provide fallback values\n  return (list.first() + list.last()) / 2;\n}\n\nexec1(List.empty<number>());\n// throws runtime error\n\nexec2(List.empty<number>());\n// gives compiler error\n")),(0,r.kt)("h3",{id:"helping-the-compiler-with-nonempty"},"Helping the compiler with .nonEmpty()"),(0,r.kt)("p",null,"It is also possible to use ",(0,r.kt)("inlineCode",{parentName:"p"},".nonEmpty()")," to have better compiler assistance than ",(0,r.kt)("inlineCode",{parentName:"p"},".isEmpty")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { List } from '@rimbu/core';\n\nfunction exec(list: List<number>): number {\n  if (list.nonEmpty()) {\n    // compiler will now know that the list is a List.NonEmpty<number>\n    // thus, no fallback values needed\n    return (list.first() + list.last()) / 2;\n  }\n\n  // list is empty\n  throw Error('should have at least one element');\n}\n")),(0,r.kt)("h2",{id:"error-modes-and-fallback-values"},"Error modes and fallback values"),(0,r.kt)("p",null,"Many languages and collection libraries offer different Error modes to deal with exceptional conditions. A mode in this case is, for example, when the user tries to get an element that is out of bounds:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"runtime error mode: throw a runtime error"),(0,r.kt)("li",{parentName:"ul"},"fallback value mode: return some default or given fallback vaue"),(0,r.kt)("li",{parentName:"ul"},"option mode: wrap the result in a monad like ",(0,r.kt)("inlineCode",{parentName:"li"},"Option")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Either"))),(0,r.kt)("p",null,"Often such modes result in methods being specified multiple times for each mode, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.getOrError(index)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.getOrValue(index, fallback)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.getOption(index)"),". Try-catch can also be considered an error mode."),(0,r.kt)("p",null,"Rimbu offers ways to determine the desired mode on every method call that could benefit from having such modes. Each such method has an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"otherwise")," parameter that can cover each of the given modes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { List, Err } from '@rimbu/core';\n\nconst list = List.of(1, 2, 3);\n\nconst e1 = list.get(10);\n// type of e1: number | undefined\n// e1 will receive value undefined\n\nconst e2 = list.get(10, Err);\n// type of e2: number\n// will throw a runtime error\n\nconst e3 = list.get(10, 0);\n// type of e3: number\n// e3 will receive value 0\n\nconst e4_1 = list.get(10, () => calculateLargePrime());\n// type of e4_1 : number\n// e4_1 will receive the result value of the `calculateLargePrime` function\n\nconst e4_2 = list.get(1, () => calculateLargePrime());\n// type of e4_2 : number\n// e4_2 will receive value 2 and not execute the `calculateLargePrime` function\n\nconst e5 = list.get(10, 'no value');\n// type of e5: number | string\n// e5 will receive string 'no value'\n")))}p.isMDXComponent=!0}}]);