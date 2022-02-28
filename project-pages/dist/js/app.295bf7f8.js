;(function(t) {
  function e(e) {
    for (
      var a, r, o = e[0], l = e[1], c = e[2], d = 0, m = [];
      d < o.length;
      d++
    )
      (r = o[d]), s[r] && m.push(s[r][0]), (s[r] = 0)
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a])
    u && u(e)
    while (m.length) m.shift()()
    return n.push.apply(n, c || []), i()
  }
  function i() {
    for (var t, e = 0; e < n.length; e++) {
      for (var i = n[e], a = !0, o = 1; o < i.length; o++) {
        var l = i[o]
        0 !== s[l] && (a = !1)
      }
      a && (n.splice(e--, 1), (t = r((r.s = i[0]))))
    }
    return t
  }
  var a = {},
    s = { app: 0 },
    n = []
  function r(e) {
    if (a[e]) return a[e].exports
    var i = (a[e] = { i: e, l: !1, exports: {} })
    return t[e].call(i.exports, i, i.exports, r), (i.l = !0), i.exports
  }
  ;(r.m = t),
    (r.c = a),
    (r.d = function(t, e, i) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i })
    }),
    (r.r = function(t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var i = Object.create(null)
      if (
        (r.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var a in t)
          r.d(
            i,
            a,
            function(e) {
              return t[e]
            }.bind(null, a)
          )
      return i
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t['default']
            }
          : function() {
              return t
            }
      return r.d(e, 'a', e), e
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (r.p = '/')
  var o = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = o.push.bind(o)
  ;(o.push = e), (o = o.slice())
  for (var c = 0; c < o.length; c++) e(o[c])
  var u = l
  n.push([0, 'chunk-vendors']), i()
})({
  0: function(t, e, i) {
    t.exports = i('56d7')
  },
  '034f': function(t, e, i) {
    'use strict'
    var a = i('1356'),
      s = i.n(a)
    s.a
  },
  '0e61': function(t, e, i) {},
  1356: function(t, e, i) {},
  '17ec': function(t, e, i) {
    'use strict'
    var a = i('0e61'),
      s = i.n(a)
    s.a
  },
  '56d7': function(t, e, i) {
    'use strict'
    i.r(e)
    i('cadf'), i('551c'), i('f751'), i('097d')
    var a = i('2b0e'),
      s = i('bb71')
    i('da64')
    a['a'].use(s['a'], { iconfont: 'md, fa' })
    var n = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e
        return a(
          'v-app',
          { attrs: { dark: '' } },
          [
            a(
              'v-container',
              { staticClass: 'pa-2', attrs: { 'fill-height': '' } },
              [
                a(
                  'v-layout',
                  { attrs: { 'align-center': '', 'justify-center': '' } },
                  [
                    a(
                      'v-flex',
                      {
                        attrs: {
                          xl8: '',
                          lg9: '',
                          md10: '',
                          sm11: '',
                          xs12: '',
                          id: 'page',
                        },
                      },
                      [
                        a(
                          'v-img',
                          {
                            attrs: {
                              id: 'home',
                              app: '',
                              src: i('8239'),
                              height: '25vh',
                            },
                          },
                          [
                            a(
                              'v-layout',
                              {
                                staticClass: 'lightbox white--text',
                                attrs: {
                                  'pa-2': '',
                                  column: '',
                                  'fill-height': '',
                                  'justify-center': '',
                                  'align-center': '',
                                },
                              },
                              [
                                a('v-spacer'),
                                a('v-flex', [
                                  a(
                                    'div',
                                    {
                                      staticClass: 'comfortaa text-xs-center',
                                      attrs: { id: 'subheader' },
                                    },
                                    [
                                      t._v(
                                        '\n                Photography by\n              '
                                      ),
                                    ]
                                  ),
                                  a(
                                    'div',
                                    {
                                      staticClass: 'pacifico text-xs-center',
                                      attrs: { id: 'header' },
                                    },
                                    [
                                      t._v(
                                        '\n                Astrid Mustermann\n              '
                                      ),
                                    ]
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        a(
                          'v-navigation-drawer',
                          {
                            staticClass: 'hidden-lg-and-up',
                            attrs: {
                              app: '',
                              fixed: '',
                              temporary: '',
                              clipped: '',
                              right: '',
                              width: '200',
                            },
                            model: {
                              value: t.drawer,
                              callback: function(e) {
                                t.drawer = e
                              },
                              expression: 'drawer',
                            },
                          },
                          [
                            a(
                              'v-list',
                              [
                                a(
                                  'v-list-tile',
                                  {
                                    on: {
                                      click: function(e) {
                                        return t.scrollFunc('#home')
                                      },
                                    },
                                  },
                                  [
                                    a(
                                      'v-list-tile-action',
                                      [a('v-icon', [t._v('home')])],
                                      1
                                    ),
                                    a(
                                      'v-list-tile-content',
                                      [a('v-list-tile-title', [t._v('Home')])],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                a(
                                  'v-list-tile',
                                  {
                                    on: {
                                      click: function(e) {
                                        return t.scrollFunc('#smPortfolio')
                                      },
                                    },
                                  },
                                  [
                                    a(
                                      'v-list-tile-action',
                                      [a('v-icon', [t._v('photo_library')])],
                                      1
                                    ),
                                    a(
                                      'v-list-tile-content',
                                      [
                                        a('v-list-tile-title', [
                                          t._v('Portfolio'),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                a(
                                  'v-list-tile',
                                  {
                                    staticClass: 'pa-0',
                                    on: {
                                      click: function(e) {
                                        return t.scrollFunc('#contact')
                                      },
                                    },
                                  },
                                  [
                                    a(
                                      'v-list-tile-action',
                                      [a('v-icon', [t._v('message')])],
                                      1
                                    ),
                                    a(
                                      'v-list-tile-content',
                                      [
                                        a('v-list-tile-title', [
                                          t._v('Kontakt'),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        a(
                          'v-toolbar',
                          {
                            staticClass: 'sticky',
                            attrs: { app: '', 'clipped-right': '' },
                          },
                          [
                            a(
                              'v-toolbar-title',
                              { staticClass: 'pacifico' },
                              [
                                a('v-icon', { staticClass: 'pb-1' }, [
                                  t._v('camera_alt'),
                                ]),
                                t._v('\n            A. Mustermann\n          '),
                              ],
                              1
                            ),
                            a('v-spacer'),
                            a(
                              'v-toolbar-items',
                              { staticClass: 'hidden-sm-and-down' },
                              [
                                a(
                                  'v-btn',
                                  {
                                    attrs: { flat: '' },
                                    on: {
                                      click: function(e) {
                                        return t.scrollFunc('#home')
                                      },
                                    },
                                  },
                                  [
                                    a('v-icon', [t._v('home')]),
                                    t._v('\n              Home\n            '),
                                  ],
                                  1
                                ),
                                a(
                                  'v-btn',
                                  {
                                    attrs: { flat: '' },
                                    on: {
                                      click: function(e) {
                                        return t.scrollFunc('#portfolio')
                                      },
                                    },
                                  },
                                  [
                                    a('v-icon', [t._v('photo_library')]),
                                    t._v(
                                      '\n              Portfolio\n            '
                                    ),
                                  ],
                                  1
                                ),
                                a(
                                  'v-btn',
                                  {
                                    staticClass: 'r-0',
                                    attrs: { flat: '' },
                                    on: {
                                      click: function(e) {
                                        return t.scrollFunc('#contact')
                                      },
                                    },
                                  },
                                  [
                                    a('v-icon', [t._v('message')]),
                                    t._v(
                                      '\n              Kontakt\n            '
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              'v-toolbar-side-icon',
                              {
                                staticClass: 'hidden-md-and-up',
                                attrs: { large: '' },
                                on: {
                                  click: function(e) {
                                    e.stopPropagation(), (t.drawer = !t.drawer)
                                  },
                                },
                              },
                              [a('v-icon', [t._v('menu')])],
                              1
                            ),
                          ],
                          1
                        ),
                        a(
                          'v-content',
                          { staticClass: 'pa-0' },
                          [
                            a('Carousel'),
                            a(
                              'v-layout',
                              {
                                staticClass: 'mt-3 hidden-sm-and-down',
                                attrs: { row: '', wrap: '' },
                              },
                              [
                                a(
                                  'v-flex',
                                  {
                                    staticClass: 'pr-3',
                                    attrs: { 'd-flex': '', md7: '' },
                                  },
                                  [
                                    a(
                                      'v-card',
                                      { attrs: { id: 'portfolio' } },
                                      [
                                        a('v-card-text', [
                                          a('p', [t._v('Portrait')]),
                                          a('p', { staticClass: 'ml-5' }, [
                                            t._v(
                                              '\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n                    Suscipit non aliquid cumque dolorem illum natus minima,\n                    amet earum delectus nemo illo esse aliquam, consectetur\n                    itaque perspiciatis rerum voluptatum consequatur pariatur?\n                  '
                                            ),
                                          ]),
                                        ]),
                                        a('v-card-text', [
                                          a('p', [t._v('Hochzeit')]),
                                          a('p', { staticClass: 'ml-5' }, [
                                            t._v(
                                              '\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n                    Suscipit non aliquid cumque dolorem illum natus minima,\n                    amet earum delectus nemo illo esse aliquam, consectetur\n                    itaque perspiciatis rerum voluptatum consequatur pariatur?\n                  '
                                            ),
                                          ]),
                                        ]),
                                        a('v-card-text', [
                                          a('p', [t._v('Pärchen')]),
                                          a('p', { staticClass: 'ml-5' }, [
                                            t._v(
                                              '\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n                    Suscipit non aliquid cumque dolorem illum natus minima,\n                    amet earum delectus nemo illo esse aliquam, consectetur\n                    itaque perspiciatis rerum voluptatum consequatur pariatur?\n                  '
                                            ),
                                          ]),
                                        ]),
                                        a('v-card-text', [
                                          a('p', [t._v('Akt')]),
                                          a('p', { staticClass: 'ml-5' }, [
                                            t._v(
                                              '\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n                    Suscipit non aliquid cumque dolorem illum natus minima,\n                    amet earum delectus nemo illo esse aliquam, consectetur\n                    itaque perspiciatis rerum voluptatum consequatur pariatur?\n                  '
                                            ),
                                          ]),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                a(
                                  'v-flex',
                                  { attrs: { 'd-flex': '', md5: '' } },
                                  [
                                    a(
                                      'v-layout',
                                      { attrs: { row: '', wrap: '' } },
                                      [
                                        a('v-flex', { attrs: { xs12: '' } }, [
                                          a(
                                            'div',
                                            {
                                              staticClass:
                                                'sacramento pt-2 mb-3 ml-3 mr-3',
                                            },
                                            [
                                              t._v(
                                                '\n                    „Auf einem guten Foto sehen wir die Welt so, wie wir sie\n                    kennen. '
                                              ),
                                              a('br'),
                                              t._v(
                                                '\n                    Ein klasse Foto zeigt die Welt, wie wir sie noch nie\n                    gesehen haben.”\n                  '
                                              ),
                                            ]
                                          ),
                                        ]),
                                        a(
                                          'v-flex',
                                          { attrs: { 'd-flex': '' } },
                                          [
                                            a(
                                              'v-card',
                                              {
                                                staticClass:
                                                  'aboutMeGradient darken-2',
                                              },
                                              [
                                                a(
                                                  'v-card-title',
                                                  { staticClass: 'headline' },
                                                  [
                                                    t._v(
                                                      '\n                      Über Mich:\n                    '
                                                    ),
                                                  ]
                                                ),
                                                a(
                                                  'v-card-text',
                                                  { staticClass: 'body-1' },
                                                  [
                                                    a('p', [
                                                      t._v(
                                                        '\n                        Lorem ipsum dolor sit amet consectetur adipisicing\n                        elit. Aliquid cumque quae a nesciunt? Natus,\n                        molestias. Accusantium repudiandae necessitatibus hic\n                        quos nesciunt, magnam aliquid laborum explicabo sequi\n                        fugiat laudantium maxime provident.\n                      '
                                                      ),
                                                    ]),
                                                    a('p', [
                                                      t._v(
                                                        '\n                        Lorem ipsum dolor sit, amet consectetur adipisicing\n                        elit. Ratione eaque possimus rem est? Molestiae quo\n                        optio animi modi, in natus. Deleniti doloribus tempore\n                        molestiae voluptatibus non amet aperiam, quos aliquam.\n                      '
                                                      ),
                                                    ]),
                                                    a('img', {
                                                      attrs: {
                                                        src: i('9b19'),
                                                        height: '180px',
                                                        align: 'right',
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              'v-layout',
                              {
                                staticClass: 'mt-3 hidden-md-and-up',
                                attrs: { row: '', wrap: '' },
                              },
                              [
                                a('v-flex', { attrs: { xs12: '' } }, [
                                  a(
                                    'div',
                                    {
                                      staticClass:
                                        'sacramento pt-2 pb-2 ml-3 mr-3',
                                    },
                                    [
                                      t._v(
                                        '\n                „Auf einem guten Foto sehen wir die Welt so, wie wir sie\n                kennen. '
                                      ),
                                      a('br'),
                                      t._v(
                                        '\n                Ein klasse Foto zeigt die Welt, wie wir sie noch nie gesehen\n                haben.”\n              '
                                      ),
                                    ]
                                  ),
                                ]),
                                a(
                                  'v-flex',
                                  {
                                    staticClass: 'mt-3',
                                    attrs: { xs12: '', id: 'portfolio' },
                                  },
                                  [
                                    a(
                                      'v-expansion-panel',
                                      {
                                        attrs: { id: 'smPortfolio', value: 0 },
                                      },
                                      [
                                        a(
                                          'v-expansion-panel-content',
                                          [
                                            a(
                                              'div',
                                              {
                                                attrs: { slot: 'header' },
                                                slot: 'header',
                                              },
                                              [t._v('Portrait')]
                                            ),
                                            a(
                                              'v-card',
                                              {
                                                staticClass:
                                                  'smPortfolioGradient',
                                              },
                                              [
                                                a('v-card-text', [
                                                  t._v(
                                                    '\n                      Lorem ipsum, dolor sit amet consectetur adipisicing\n                      elit. Inventore cum error quia quae minima? Quo nemo\n                      eligendi voluptas mollitia explicabo debitis repudiandae\n                      eius doloribus? Incidunt, praesentium facilis?\n                      Doloremque, officia aliquid.\n                    '
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                        a(
                                          'v-expansion-panel-content',
                                          [
                                            a(
                                              'div',
                                              {
                                                attrs: { slot: 'header' },
                                                slot: 'header',
                                              },
                                              [t._v('Hochzeit')]
                                            ),
                                            a(
                                              'v-card',
                                              {
                                                staticClass:
                                                  'smPortfolioGradient',
                                              },
                                              [
                                                a('v-card-text', [
                                                  t._v(
                                                    '\n                      Lorem ipsum, dolor sit amet consectetur adipisicing\n                      elit. Inventore cum error quia quae minima? Quo nemo\n                      eligendi voluptas mollitia explicabo debitis repudiandae\n                      eius doloribus? Incidunt, praesentium facilis?\n                      Doloremque, officia aliquid.\n                    '
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                        a(
                                          'v-expansion-panel-content',
                                          [
                                            a(
                                              'div',
                                              {
                                                attrs: { slot: 'header' },
                                                slot: 'header',
                                              },
                                              [t._v('Pärchen')]
                                            ),
                                            a(
                                              'v-card',
                                              {
                                                staticClass:
                                                  'smPortfolioGradient',
                                              },
                                              [
                                                a('v-card-text', [
                                                  t._v(
                                                    '\n                      Lorem ipsum, dolor sit amet consectetur adipisicing\n                      elit. Inventore cum error quia quae minima? Quo nemo\n                      eligendi voluptas mollitia explicabo debitis repudiandae\n                      eius doloribus? Incidunt, praesentium facilis?\n                      Doloremque, officia aliquid.\n                    '
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                        a(
                                          'v-expansion-panel-content',
                                          [
                                            a(
                                              'div',
                                              {
                                                attrs: { slot: 'header' },
                                                slot: 'header',
                                              },
                                              [t._v('Akt')]
                                            ),
                                            a(
                                              'v-card',
                                              {
                                                staticClass:
                                                  'smPortfolioGradient',
                                              },
                                              [
                                                a('v-card-text', [
                                                  t._v(
                                                    '\n                      Lorem ipsum, dolor sit amet consectetur adipisicing\n                      elit. Inventore cum error quia quae minima? Quo nemo\n                      eligendi voluptas mollitia explicabo debitis repudiandae\n                      eius doloribus? Incidunt, praesentium facilis?\n                      Doloremque, officia aliquid.\n                    '
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                a(
                                  'v-flex',
                                  {
                                    staticClass: 'mt-3',
                                    attrs: { 'd-flex': '' },
                                  },
                                  [
                                    a(
                                      'v-card',
                                      {
                                        staticClass: 'aboutMeGradient darken-2',
                                      },
                                      [
                                        a(
                                          'v-card-text',
                                          { staticClass: 'body-1' },
                                          [
                                            a(
                                              'v-layout',
                                              {
                                                attrs: {
                                                  row: '',
                                                  wrap: '',
                                                  'align-center': '',
                                                },
                                              },
                                              [
                                                a(
                                                  'v-flex',
                                                  {
                                                    attrs: {
                                                      xs12: '',
                                                      sm7: '',
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      'p',
                                                      {
                                                        staticClass: 'headline',
                                                      },
                                                      [
                                                        t._v(
                                                          '\n                        Über Mich:\n                      '
                                                        ),
                                                      ]
                                                    ),
                                                    a('p', [
                                                      t._v(
                                                        '\n                        Lorem ipsum dolor sit amet consectetur adipisicing\n                        elit. Aliquid cumque quae a nesciunt? Natus,\n                        molestias. Accusantium repudiandae necessitatibus hic\n                        quos nesciunt, magnam aliquid laborum explicabo sequi\n                        fugiat laudantium maxime provident.\n                      '
                                                      ),
                                                    ]),
                                                    a('p', [
                                                      t._v(
                                                        '\n                        Lorem ipsum dolor sit, amet consectetur adipisicing\n                        elit. Ratione eaque possimus rem est? Molestiae quo\n                        optio animi modi, in natus. Deleniti doloribus tempore\n                        molestiae voluptatibus non amet aperiam, quos aliquam.\n                      '
                                                      ),
                                                    ]),
                                                  ]
                                                ),
                                                a(
                                                  'v-flex',
                                                  {
                                                    attrs: {
                                                      xs12: '',
                                                      sm5: '',
                                                    },
                                                  },
                                                  [
                                                    a('img', {
                                                      attrs: {
                                                        src: i('9b19'),
                                                        height: '180px',
                                                        align: 'right',
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              'v-layout',
                              {
                                staticClass: 'mt-3',
                                attrs: {
                                  row: '',
                                  wrap: '',
                                  'justify-center': '',
                                },
                              },
                              [
                                a('v-flex', { attrs: { xs12: '' } }, [
                                  a(
                                    'p',
                                    {
                                      staticClass: 'text-xs-center',
                                      attrs: { id: 'contact' },
                                    },
                                    [
                                      a('span', { staticClass: 'headline' }, [
                                        t._v('Kontakt:'),
                                      ]),
                                      a('br'),
                                      a('span', { staticClass: 'subheading' }, [
                                        t._v(
                                          '\n                  Telefon: 012345/45678 '
                                        ),
                                        a('br'),
                                        t._v(
                                          '\n                  E-mail: Astrid@Mustermann.de '
                                        ),
                                        a('br'),
                                      ]),
                                    ]
                                  ),
                                ]),
                                a(
                                  'v-flex',
                                  {
                                    attrs: {
                                      xs11: '',
                                      lg6: '',
                                      md8: '',
                                      sm9: '',
                                    },
                                  },
                                  [
                                    a('p', { staticClass: 'text-xs-center' }, [
                                      t._v(
                                        '\n                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit\n                debitis, ipsa quae veniam impedit voluptates id. Repellat quis\n                iste, repudiandae natus quaerat, a culpa accusantium sed,\n                rerum nobis labore voluptatum.\n              '
                                      ),
                                    ]),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        a(
                          'v-footer',
                          {
                            staticClass: 'pa-0 mt-3',
                            attrs: { height: 'auto' },
                          },
                          [
                            a(
                              'v-card',
                              {
                                staticClass: 'flex',
                                attrs: { flat: '', tile: '' },
                              },
                              [
                                a(
                                  'v-card-title',
                                  { staticClass: 'footerTitle' },
                                  [
                                    a('v-spacer'),
                                    a(
                                      'v-btn',
                                      { attrs: { dark: '', icon: '' } },
                                      [
                                        a(
                                          'v-icon',
                                          { attrs: { size: '24px' } },
                                          [t._v('fab fa-facebook')]
                                        ),
                                      ],
                                      1
                                    ),
                                    a(
                                      'v-btn',
                                      {
                                        staticClass: 'mx-3',
                                        attrs: { dark: '', icon: '' },
                                      },
                                      [
                                        a(
                                          'v-icon',
                                          { attrs: { size: '24px' } },
                                          [t._v('fab fa-instagram')]
                                        ),
                                      ],
                                      1
                                    ),
                                    a('v-spacer'),
                                  ],
                                  1
                                ),
                                a(
                                  'v-card-actions',
                                  { staticClass: 'grey darken-3' },
                                  [
                                    a(
                                      'v-layout',
                                      {
                                        attrs: {
                                          column: '',
                                          'align-center': '',
                                        },
                                      },
                                      [
                                        a('v-flex', { attrs: { xs12: '' } }, [
                                          a('p', [
                                            a(
                                              'span',
                                              { staticClass: 'body-2' },
                                              [t._v('Impressum:')]
                                            ),
                                            a('br'),
                                            t._v(
                                              '\n                    Angaben gemäß § 5 TMG '
                                            ),
                                            a('br'),
                                            t._v(
                                              '\n                    Astrid Mustermann Fotografie '
                                            ),
                                            a('br'),
                                            t._v(
                                              '\n                    Beispielstraße 12 '
                                            ),
                                            a('br'),
                                            t._v(
                                              '\n                    31195 Lamspringe '
                                            ),
                                            a('br'),
                                            t._v(
                                              '\n\n                    Handelsregister: 123456 '
                                            ),
                                            a('br'),
                                            t._v(
                                              '\n                    Registergericht: Hildesheim\n                  '
                                            ),
                                          ]),
                                        ]),
                                        a('v-flex', { attrs: { xs12: '' } }, [
                                          a('p', [
                                            t._v(
                                              '\n                    © ' +
                                                t._s(new Date().getFullYear()) +
                                                '\n                    '
                                            ),
                                            a(
                                              'span',
                                              { staticClass: 'body-2' },
                                              [t._v('by Astrid Mustermann')]
                                            ),
                                          ]),
                                        ]),
                                        a('v-flex', { attrs: { xs12: '' } }, [
                                          a('p', { staticClass: 'caption' }, [
                                            t._v(
                                              '\n                    Webdesign: geissler.hannes@googlemail.com\n                  '
                                            ),
                                          ]),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        )
      },
      r = [],
      o = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e
        return i(
          'v-layout',
          [
            i(
              'v-carousel',
              {
                staticClass: 'hidden-sm-and-up',
                attrs: { 'delimiter-icon': 'stop', height: '350px' },
              },
              t._l(t.items, function(e, a) {
                return i(
                  'v-carousel-item',
                  { key: a, attrs: { src: e.src } },
                  [
                    i(
                      'v-container',
                      [
                        i(
                          'v-layout',
                          {
                            attrs: {
                              column: '',
                              'fill-height': '',
                              'justify-center': '',
                              'align-center': '',
                            },
                          },
                          [
                            i('v-flex', { attrs: { xs12: '' } }, [
                              0 == a
                                ? i('span', { staticClass: 'imgheadline xs' }, [
                                    t._v('Portrait'),
                                  ])
                                : t._e(),
                              1 == a
                                ? i('span', { staticClass: 'imgheadline xs' }, [
                                    t._v('Hochzeit'),
                                  ])
                                : t._e(),
                              2 == a
                                ? i('span', { staticClass: 'imgheadline xs' }, [
                                    t._v('Pärchen'),
                                  ])
                                : t._e(),
                              3 == a
                                ? i('span', { staticClass: 'imgheadline xs' }, [
                                    t._v('Akt'),
                                  ])
                                : t._e(),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              }),
              1
            ),
            i(
              'v-carousel',
              {
                staticClass: 'hidden-md-and-up hidden-xs-only',
                attrs: { 'delimiter-icon': 'stop', height: '400px' },
              },
              t._l(t.items, function(e, a) {
                return i(
                  'v-carousel-item',
                  { key: a, attrs: { src: e.src } },
                  [
                    i(
                      'v-container',
                      [
                        i(
                          'v-layout',
                          {
                            attrs: {
                              column: '',
                              'fill-height': '',
                              'justify-center': '',
                              'align-center': '',
                            },
                          },
                          [
                            i('v-flex', { attrs: { xs12: '' } }, [
                              0 == a
                                ? i('span', { staticClass: 'imgheadline sm' }, [
                                    t._v('Portrait'),
                                  ])
                                : t._e(),
                              1 == a
                                ? i('span', { staticClass: 'imgheadline sm' }, [
                                    t._v('Hochzeit'),
                                  ])
                                : t._e(),
                              2 == a
                                ? i('span', { staticClass: 'imgheadline sm' }, [
                                    t._v('Pärchen'),
                                  ])
                                : t._e(),
                              3 == a
                                ? i('span', { staticClass: 'imgheadline sm' }, [
                                    t._v('Akt'),
                                  ])
                                : t._e(),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              }),
              1
            ),
            i(
              'v-carousel',
              {
                staticClass: 'hidden-sm-and-down hidden-lg-and-up',
                attrs: { 'delimiter-icon': 'stop', height: '450px' },
              },
              t._l(t.items, function(e, a) {
                return i(
                  'v-carousel-item',
                  { key: a, attrs: { src: e.src } },
                  [
                    i(
                      'v-container',
                      [
                        i(
                          'v-layout',
                          {
                            attrs: {
                              column: '',
                              'fill-height': '',
                              'justify-center': '',
                              'align-center': '',
                            },
                          },
                          [
                            i('v-flex', { attrs: { xs12: '' } }, [
                              0 == a
                                ? i('span', { staticClass: 'imgheadline md' }, [
                                    t._v('Portrait'),
                                  ])
                                : t._e(),
                              1 == a
                                ? i('span', { staticClass: 'imgheadline md' }, [
                                    t._v('Hochzeit'),
                                  ])
                                : t._e(),
                              2 == a
                                ? i('span', { staticClass: 'imgheadline md' }, [
                                    t._v('Pärchen'),
                                  ])
                                : t._e(),
                              3 == a
                                ? i('span', { staticClass: 'imgheadline md' }, [
                                    t._v('Akt'),
                                  ])
                                : t._e(),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              }),
              1
            ),
            i(
              'v-carousel',
              {
                staticClass: 'hidden-md-and-down hidden-xl-only',
                attrs: { 'delimiter-icon': 'stop' },
              },
              t._l(t.items, function(e, a) {
                return i(
                  'v-carousel-item',
                  { key: a, attrs: { src: e.src } },
                  [
                    i(
                      'v-container',
                      [
                        i(
                          'v-layout',
                          {
                            attrs: {
                              column: '',
                              'fill-height': '',
                              'justify-center': '',
                              'align-center': '',
                            },
                          },
                          [
                            i('v-flex', { attrs: { xs12: '' } }, [
                              0 == a
                                ? i('span', { staticClass: 'imgheadline' }, [
                                    t._v('Portrait'),
                                  ])
                                : t._e(),
                              1 == a
                                ? i('span', { staticClass: 'imgheadline' }, [
                                    t._v('Hochzeit'),
                                  ])
                                : t._e(),
                              2 == a
                                ? i('span', { staticClass: 'imgheadline' }, [
                                    t._v('Pärchen'),
                                  ])
                                : t._e(),
                              3 == a
                                ? i('span', { staticClass: 'imgheadline' }, [
                                    t._v('Akt'),
                                  ])
                                : t._e(),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              }),
              1
            ),
            i(
              'v-carousel',
              {
                staticClass: 'hidden-lg-and-down',
                attrs: { 'delimiter-icon': 'stop', height: '550px' },
              },
              t._l(t.items, function(e, a) {
                return i(
                  'v-carousel-item',
                  { key: a, attrs: { src: e.src } },
                  [
                    i(
                      'v-container',
                      [
                        i(
                          'v-layout',
                          {
                            attrs: {
                              column: '',
                              'fill-height': '',
                              'justify-center': '',
                              'align-center': '',
                            },
                          },
                          [
                            i('v-flex', { attrs: { xs12: '' } }, [
                              0 == a
                                ? i('span', { staticClass: 'imgheadline xl' }, [
                                    t._v('Portrait'),
                                  ])
                                : t._e(),
                              1 == a
                                ? i('span', { staticClass: 'imgheadline xl' }, [
                                    t._v('Hochzeit'),
                                  ])
                                : t._e(),
                              2 == a
                                ? i('span', { staticClass: 'imgheadline xl' }, [
                                    t._v('Pärchen'),
                                  ])
                                : t._e(),
                              3 == a
                                ? i('span', { staticClass: 'imgheadline xl' }, [
                                    t._v('Akt'),
                                  ])
                                : t._e(),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              }),
              1
            ),
          ],
          1
        )
      },
      l = [],
      c = {
        data: function() {
          return {
            items: [
              {
                src:
                  'https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
              },
              {
                src:
                  'https://images.unsplash.com/photo-1521543269800-27e08780ced7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
              },
              {
                src:
                  'https://images.unsplash.com/photo-1505765052322-75804bb2e5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
              },
              {
                src:
                  'https://images.unsplash.com/photo-1519668752166-ebdbfe986afd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
              },
            ],
          }
        },
      },
      u = c,
      d = (i('17ec'), i('2877')),
      m = i('6544'),
      p = i.n(m),
      v = i('5e66'),
      f = i('3e35'),
      h = i('a523'),
      g = i('0e8f'),
      b = i('a722'),
      x = Object(d['a'])(u, o, l, !1, null, '43d0d0b5', null),
      _ = x.exports
    p()(x, {
      VCarousel: v['a'],
      VCarouselItem: f['a'],
      VContainer: h['a'],
      VFlex: g['a'],
      VLayout: b['a'],
    })
    var C = {
        name: 'App',
        components: { Carousel: _ },
        data: function() {
          return { drawer: !1 }
        },
        methods: {
          scrollFunc: function(t) {
            this.$vuetify.goTo(t), (this.drawer = !1)
          },
        },
      },
      y = C,
      q = (i('034f'), i('7496')),
      w = i('8336'),
      k = i('b0af'),
      P = i('99d9'),
      V = i('12b2'),
      j = i('549c'),
      A = i('cd55'),
      L = i('49e2'),
      M = i('553a'),
      T = i('132d'),
      F = i('adda'),
      H = i('8860'),
      O = i('ba95'),
      I = i('40fe'),
      D = i('5d23'),
      S = i('f774'),
      z = i('9910'),
      E = i('71d9'),
      W = i('2a7f'),
      Q = i('706c'),
      G = Object(d['a'])(y, n, r, !1, null, null, null),
      B = G.exports
    p()(G, {
      VApp: q['a'],
      VBtn: w['a'],
      VCard: k['a'],
      VCardActions: P['a'],
      VCardText: P['b'],
      VCardTitle: V['a'],
      VContainer: h['a'],
      VContent: j['a'],
      VExpansionPanel: A['a'],
      VExpansionPanelContent: L['a'],
      VFlex: g['a'],
      VFooter: M['a'],
      VIcon: T['a'],
      VImg: F['a'],
      VLayout: b['a'],
      VList: H['a'],
      VListTile: O['a'],
      VListTileAction: I['a'],
      VListTileContent: D['a'],
      VListTileTitle: D['b'],
      VNavigationDrawer: S['a'],
      VSpacer: z['a'],
      VToolbar: E['a'],
      VToolbarItems: W['a'],
      VToolbarSideIcon: Q['a'],
      VToolbarTitle: W['b'],
    }),
      (a['a'].config.productionTip = !1),
      new a['a']({
        render: function(t) {
          return t(B)
        },
      }).$mount('#app')
  },
  8239: function(t, e, i) {
    t.exports = './img/header-img.6c976e40.png'
  },
  '9b19': function(t, e, i) {
    t.exports = './img/logo.a1b8eea3.svg'
  },
})
//# sourceMappingURL=app.295bf7f8.js.map
