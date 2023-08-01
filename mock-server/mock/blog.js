const Mock = require('mockjs')
const Random = Mock.Random

// 博客内容
const content = `# 深入理解 JavaScript 原型与原型链

JavaScript 是一门基于原型的面向对象编程语言，它的原型和原型链是其核心特性之一。理解原型和原型链的概念对于掌握 JavaScript 的面向对象编程非常重要。本文将深入探讨 JavaScript 的原型与原型链，帮助读者更好地理解和应用这一概念。

## 什么是原型？

在 JavaScript 中，每个对象都有一个原型（prototype），原型可以看作是对象的父对象。原型是一个包含属性和方法的对象，其他对象可以通过原型来继承这些属性和方法。每个对象都有一个内部属性 \`[[Prototype]]\`，它指向该对象的原型。

## 原型链的作用

原型链是由一系列对象组成的链表，每个对象都有一个指向其原型的引用。当我们访问一个对象的属性或方法时，如果对象本身没有这个属性或方法，JavaScript 引擎会沿着原型链向上查找，直到找到该属性或方法，或者到达原型链的末尾。这种机制使得对象之间可以共享属性和方法，实现了简洁高效的代码复用。

## 如何访问原型

在 JavaScript 中，可以通过 \`__proto__\` 属性访问对象的原型。例如，\`obj.__proto__\` 可以用来访问对象 \`obj\` 的原型。然而，需要注意的是，\`__proto__\` 是非标准的属性，它存在于大多数 JavaScript 引擎中，但并不是所有环境都支持。

## 创建对象的方式

在 JavaScript 中，有多种方式可以创建对象。最常见的方式是使用对象字面量 \`{}\` 和 \`new\` 关键字。对象字面量创建的对象的原型是 \`Object.prototype\`，而使用 \`new\` 关键字创建的对象的原型是构造函数的 \`prototype\` 属性。还可以使用 \`Object.create()\` 方法来创建一个指定原型的新对象。

## 原型与构造函数

在 JavaScript 中，构造函数是一种用于创建对象的特殊函数。通过构造函数创建的对象可以共享相同的原型。构造函数可以使用 \`new\` 关键字来调用，这会创建一个新对象，并将该对象的原型指向构造函数的 \`prototype\` 属性。

## 原型继承

通过原型链，JavaScript 实现了对象之间的继承。当一个对象通过原型链继承了另一个对象的属性和方法时，它可以使用这些继承的属性和方法，实现了代码的复用和扩展。

## 总结

JavaScript 的原型与原型链是其独特的面向对象编程特性，它使得对象之间可以共享属性`;


module.exports = [
  // 获取博客列表
  {
    url: '/api/blogs',
    method: 'get',
    response: () => {
      return {
        "status": "success",
        "data": {
          "total": 100,
          "list": [
            {
              "id": Random.id(),
              "title": "深入理解JavaScript原型与原型链",
              "description": "本文详细介绍了JavaScript中的原型和原型链的概念、原理和使用方法，帮助读者更深入地理解JavaScript中的继承机制。",
              "category": "前端",
              "author": "张三",
              "likes": 128,
              "favorites": 56,
              "comments": 42,
              "createdAt": "2023-06-10T09:30:00Z",
              "updatedAt": "2023-06-14T14:20:00Z"
            },
            {
              "id": Random.id(),
              "title": "Java并发编程实战",
              "description": "本文介绍了Java并发编程的基本概念、线程安全性、锁机制以及常见的并发模型和解决方案，帮助读者编写高效且线程安全的Java应用程序。",
              "category": "Java",
              "author": "李四",
              "likes": 215,
              "favorites": 72,
              "comments": 61,
              "createdAt": "2022-06-03T11:15:00Z",
              "updatedAt": "2022-06-08T16:40:00Z"
            },
            {
              "id": Random.id(),
              "title": "Python数据分析入门指南",
              "description": "本文介绍了使用Python进行数据分析的基本方法和常用工具，包括数据清洗、可视化、统计分析等内容，适合初学者快速入门。",
              "category": "Python",
              "author": "王五",
              "likes": 98,
              "favorites": 33,
              "comments": 25,
              "createdAt": "2022-07-20T13:45:00Z",
              "updatedAt": "2022-07-25T18:10:00Z"
            },
            {
              "id": Random.id(),
              "title": "小程序开发实战指南",
              "description": "本文详细介绍了小程序开发的基本概念、技术要点和实战经验，帮助读者快速掌握小程序开发并编写出高质量的小程序应用。",
              "category": "小程序",
              "author": "赵六",
              "likes": 75,
              "favorites": 29,
              "comments": 18,
              "createdAt": "2022-08-08T10:20:00Z",
              "updatedAt": "2022-08-12T15:30:00Z"
            },
            {
              "id": Random.id(),
              "title": "JavaScript中的函数式编程",
              "description": "本文介绍了JavaScript中的函数式编程的概念、特性和应用场景，以及常用的函数式编程库和工具，帮助读者写出更简洁、可维护的代码。",
              "category": "前端",
              "author": "张三",
              "likes": 183,
              "favorites": 67,
              "comments": 49,
              "createdAt": "2022-09-05T08:50:00Z",
              "updatedAt": "2022-09-10T12:15:00Z"
            },
            {
              "id": Random.id(),
              "title": "Java后端开发框架选择指南",
              "description": "本文介绍了Java后端开发常用的框架，包括Spring Boot、Spring MVC、MyBatis等，比较了它们的特点和适用场景，帮助读者选择合适的框架。",
              "category": "Java",
              "author": "李四",
              "likes": 142,
              "favorites": 51,
              "comments": 38,
              "createdAt": "2022-10-18T11:30:00Z",
              "updatedAt": "2022-10-23T16:50:00Z"
            },
            {
              "id": Random.id(),
              "title": "Python机器学习入门教程",
              "description": "本文介绍了Python机器学习的基本概念、常用算法和实践案例，帮助读者入门机器学习并应用于实际项目中。",
              "category": "Python",
              "author": "王五",
              "likes": 112,
              "favorites": 41,
              "comments": 32,
              "createdAt": "2022-11-30T14:15:00Z",
              "updatedAt": "2022-12-05T19:20:00Z"
            },
            {
              "id": Random.id(),
              "title": "小程序商城开发实战",
              "description": "本文以一个实际的小程序商城项目为例，介绍了小程序商城的开发流程、技术选型和核心功能的实现，帮助读者快速搭建自己的小程序商城。",
              "category": "小程序",
              "author": "赵六",
              "likes": 89,
              "favorites": 37,
              "comments": 27,
              "createdAt": "2023-01-10T09:40:00Z",
              "updatedAt": "2023-01-15T14:55:00Z"
            },
            {
              "id": Random.id(),
              "title": "Vue.js实战教程",
              "description": "本文以实际项目为例，介绍了Vue.js的基本语法、组件化开发和常用工具，帮助读者掌握Vue.js的开发技巧并编写出高质量的Vue应用。",
              "category": "前端",
              "author": "张三",
              "likes": 176,
              "favorites": 62,
              "comments": 46,
              "createdAt": "2023-02-25T10:50:00Z",
              "updatedAt": "2023-03-02T16:25:00Z"
            },
            {
              "id": Random.id(),
              "title": "Java性能调优实战",
              "description": "本文介绍了Java应用程序的性能调优方法和常见问题的解决方案，包括内存管理、线程调度、数据库优化等方面的实战经验。",
              "category": "Java",
              "author": "李四",
              "likes": 128,
              "favorites": 48,
              "comments": 35,
              "createdAt": "2023-04-12T12:20:00Z",
              "updatedAt": "2023-04-17T17:40:00Z"
            }
          ]          
        }
      }
    }
  },

  // 博客详情页
  {
    url: '/api/blogs/:id',
    method: 'get',
    response: () => {
      return {
        "status": "success",
        "data": {
          "id": Random.id(),
          "title": "深入理解JavaScript原型与原型链",
          "content": content,
          "category": "前端",
          "author": "张三",
          "likes": 128,
          "isLiked": false,
          "favorites": 56,
          "isFavorited": true,
          "comments": 42,
          "createdAt": "2023-06-10T09:30:00Z",
          "updatedAt": "2023-06-14T14:20:00Z"
        }
      }
    }
  },

  // 博客点赞
  {
    url: '/api/blogs/:id/like',
    method: 'post',
    response: () => {
      return {
        "status": "success",
      }
    }
  },

  // 博客取消点赞
  {
    url: '/api/blogs/:id/like',
    method: 'delete',
    response: () => {
      return {
        "status": "success",
      }
    }
  },

  // 博客收藏
  {
    url: '/api/blogs/:id/favorite',
    method: 'post',
    response: () => {
      return {
        "status": "success",
      }
    }
  },

  // 博客取消收藏
  {
    url: '/api/blogs/:id/favorite',
    method: 'delete',
    response: () => {
      return {
        "status": "success",
      }
    }
  },

  // 删除博客
  {
    url: '/api/blogs/:id',
    method: 'delete',
    response: () => {
      return {
        "status": "success",
      }
    }
  },

  // 创建博客
  {
    url: '/api/blogs',
    method: 'post',
    response: () => {
      return {
        "status": "success",
      }
    }
  },

  // 编辑博客
  {
    url: '/api/blogs/:id',
    method: 'put',
    response: () => {
      return {
        "status": "success",
      }
    }
  }

  // 其他接口
]