<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/anki">Anki</nuxt-link>
    </p>
    <div class="article-content">
      <div class="elementor-column-wrap  elementor-element-populated">
        <div class="elementor-widget-wrap">
          <div
            data-id="13603d27"
            class="elementor-element elementor-element-13603d27 elementor-widget elementor-widget-text-editor"
            data-element_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              <div class="elementor-text-editor elementor-clearfix">
                <div class="box">
                  <p style="text-align: center;">Table of Contents</p>
                  <ul>
                    <li>
                      <nuxt-link class="linkx" to="#intro">Intro</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link class="linkx" to="#glossary"
                        >Glossary</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link class="linkx" to="#installation"
                        >Installation</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link class="linkx" to="#setup">Setup</nuxt-link>
                      <ul>
                        <li>
                          <nuxt-link class="linkx" to="#preferences"
                            >Preferences</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link class="linkx" to="#types"
                            >Note-Types</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link class="linkx" to="#frequency"
                            >frequency.txt</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link class="linkx" to="#recalc"
                            >Recalc</nuxt-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <nuxt-link class="linkx" to="#usage">Usage</nuxt-link>
                      <ul>
                        <li>
                          <nuxt-link class="linkx" to="#browser"
                            >In the Browser</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link class="linkx" to="#repping"
                            >While Repping</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link class="linkx" to="#workingwith"
                            >Working with the Algorithm</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link class="linkx" to="#database_manager"
                            >Database Manager</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link class="linkx" to="#analyzer"
                            >Readability Analyzer</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link class="linkx" to="#config"
                            >config.py</nuxt-link
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <h1 id="intro">Intro</h1>
                <p>
                  MorphMan is an Anki add-on that keeps track of what words you
                  know and uses that to reorder your new cards into an optimal
                  order for learning.
                </p>
                <p>
                  You tell MorphMan which decks/cards/fields you want it to look
                  at, and it goes through and parses all the text in those
                  fields into “Morphs” (basically, words). It assumes you
                  already know all the Morphs contained within the cards you’ve
                  learned. In this way, it creates a database of your current
                  knowledge and uses that database to analyze how many unknown
                  Morphs are contained within each of your new cards.
                </p>
                <p>
                  It then reorders your new cards based on difficulty, so that
                  you see the easiest cards (i.e., the cards with the fewest
                  number of unknown Morphs) first. MorphMan only reorders your
                  new cards; it doesn’t touch the scheduling of cards you’ve
                  already learned. You can tell MorphMan to re-analyze and
                  reorder your cards as often as you like. This allows you to
                  always learn new cards in a
                  <nuxt-link
                    class="link3"
                    to="https://massimmersionapproach.com/table-of-contents/tools/glossary/#1T"
                    >1T</nuxt-link
                  >
                  fashion.
                </p>
                <p>
                  MorphMan is useful for use with subs2srs collections, as it
                  can do the work of finding all of the
                  <nuxt-link
                    class="link3"
                    to="https://massimmersionapproach.com/table-of-contents/tools/glossary/#1T"
                    >1T sentences</nuxt-link
                  >
                  in an episode for you. It is also ideal for learning with a
                  pre-made deck alongside sentence mining, as any material
                  contained within the pre-made deck that you’ve already learned
                  through mining will automatically be skipped, saving you time.
                </p>
                <p>
                  In addition to its main feature of reordering cards, MorphMan
                  can also do the following:
                </p>
                <ul>
                  <li>
                    Automatically add specific tags and fill specific fields to
                    provide information about the difficulty of cards.
                  </li>
                  <li>
                    Analyze the readability of target-language texts based on
                    your current knowledge.
                  </li>
                  <li>Create frequency lists from target-language texts.</li>
                  <li>
                    Edit subtitle files to show/hide words based on your current
                    knowledge.
                  </li>
                </ul>
                <p>
                  Morphman was created for use with Japanese but has full
                  support for Chinese as well. MorphMan also has limited support
                  for any language written with spaces between words, and
                  languages that use CJK characters.
                </p>
                <p>
                  Although MorphMan can be used on both Anki 2.1 and Anki 2.0,
                  this guide will focus on the Anki 2.1 port. Because the two
                  versions&nbsp;differ in several areas, some information in
                  this guide may not apply to the Anki 2.0 version.
                </p>
                <p>
                  MorphMan has passed through the hands of multiple programmers
                  since its creation in 2011, and unfortunately, it’s a bit of a
                  mess in its current form. This guide is an attempt to explain
                  how MorphMan for Anki 2.1 functions as simply as possible.
                  Feel free to skip straight to
                  <nuxt-link class="link3" to="#installation"
                    >Installation</nuxt-link
                  >
                  or <nuxt-link class="link3" to="#setup">Setup</nuxt-link>, and
                  refer back to the Glossary whenever clarification is needed.
                </p>
                <p>
                  The following video demonstrates how to set up the basic
                  features of MorphMan:
                </p>
              </div>
            </div>
          </div>

          <YouTubeEmbed src="https://youtube.com/embed/h2xYKx76-9s" />

          <div
            data-id="1c247bc"
            class="elementor-element elementor-element-1c247bc elementor-widget elementor-widget-text-editor"
            data-element_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              <div class="elementor-text-editor elementor-clearfix">
                <h1 id="glossary">Glossary</h1>
                <h3 id="1T">1T Sentence</h3>
                <p>
                  Abbreviation for “one-target sentence”. A sentence that
                  contains one unknown word or grammar structure. The unknown
                  word or structure is referred to as the “target word” or
                  “target structure”.
                </p>
                <p>
                  Learning through 1T sentences can be thought of as “picking
                  low-hanging fruit”. It makes the target word/structure easy to
                  understand and retain. As you continue to learn, sentences
                  that were previously one-target will become zero-target, and
                  sentences that were previously multi-target will become
                  one-target. In this way, one-target sentences can take you all
                  the way to fluency.
                </p>
                <p>
                  You can learn more about the idea
                  <nuxt-link
                    class="link3"
                    to="https://massimmersionapproach.com/table-of-contents/tools/glossary/#1T"
                    >here</nuxt-link
                  >.
                </p>
                <h3 id="morph">Morph</h3>
                <p>
                  Short for “morpheme.” A morpheme is “a meaningful
                  morphological unit of a language that cannot be further
                  divided (e.g. in, come, -ing, forming incoming) [<nuxt-link
                    class="link3"
                    to="https://forum.koohii.com/thread-7486.html"
                    rel="noopener"
                    >The Oxford English Dictionary</nuxt-link
                  >]”. In the context of MorphMan, a Morph is basically a word.
                </p>
                <h3 id="db">Database (DB)</h3>
                <p>
                  A list of Morphs, which are saved in a “.db” file. MorphMan
                  uses seven different databases to keep track of what you know
                  and how well you know it. Four of the seven are necessary for
                  MorphMan to function and are generated automatically. The
                  other two are for additional features and must be manually
                  created by the user. All seven databases go in the following
                  directory:
                  <code
                    >C:\Users\[user]\AppData\Roaming\Anki2\[profile_name]\dbs</code
                  >.
                </p>
                <p>The seven databases are:</p>
                <ul>
                  <li id="all.db">
                    <strong>all.db</strong>: automatically generated; contains
                    all Morphs contained within specified fields + all Morphs
                    that have been imported from external.db.
                  </li>
                  <li id="mature.db">
                    <strong>mature.db</strong>: automatically generated;
                    contains all mature Morphs.
                  </li>
                  <li id="known.db">
                    <strong>known.db</strong>: automatically generated; contains
                    all known Morphs.
                  </li>
                  <li id="seen.db">
                    <strong>seen.db</strong>: automatically generated; contains
                    all seen Morphs.
                  </li>
                  <li id="priority">
                    <strong>priority.db</strong>: manually generated using the
                    <nuxt-link class="link3" to="#database_manager"
                      >Database Manager</nuxt-link
                    >; cards containing Morphs in this database will be
                    prioritized over cards that would otherwise have the same
                    <nuxt-link class="link3" to="#mmi">MorphMan Index</nuxt-link
                    >.
                  </li>
                  <li>
                    <strong>frequency.txt</strong>: manually generated;
                    functions as a frequency list. Cards with Morphs positioned
                    higher on this list will be prioritized over cards with
                    Morphs positioned lower.
                  </li>
                  <li>
                    <strong>external.db</strong>: manually generated using the
                    <nuxt-link class="link3" to="#database_manager"
                      >Database Manager</nuxt-link
                    >; user-managed database that tracks outside-Anki knowledge.
                    MorphMan assumes that all Morphs in this database are
                    mature.
                  </li>
                </ul>
                <h3 id="mature">Mature</h3>
                <p>
                  A card that has an interval of at least 21 days. Also, a Morph
                  that is contained within the specified field of a “mature”
                  card. Morphs added through “external.db” are automatically
                  counted as mature. The threshold of when a card gets counted
                  as “mature” can be changed in
                  <nuxt-link class="link3" to="#configedit">config.py</nuxt-link
                  >.
                </p>
                <h3 id="known">Known</h3>
                <p>
                  A card that has been reviewed. Also, a Morph that is contained
                  within the specified field of a “known” card. Same as a “seen”
                  card/Morph. The threshold of when a card gets counted as
                  “known” can be changed in
                  <nuxt-link class="link3" to="#configedit">config.py</nuxt-link
                  >. If you change the threshold from the default of 10 seconds
                  to 24 hours, only cards that have graduated from the learning
                  queue will be counted as “known”, thereby differentiating
                  “known” and “seen” cards/Morphs.
                </p>
                <h3 id="seen">Seen</h3>
                <p>
                  A card that has been reviewed. Also, a morph that is contained
                  within the specified field of a “seen” card. With the default
                  <nuxt-link class="link3" to="#config">config.py</nuxt-link>
                  settings, “seen” cards/Morphs will also be treated as “known”
                  cards, even before graduating from the learning queue.
                </p>
                <h3 id="unknown">Unknown</h3>
                <p>A Morph that has not been “seen”.</p>
                <h3 id="unmature">Unmature</h3>
                <p>A Morph that is “known”, but is still not “mature”.</p>
                <h3>Focus Morph</h3>
                <p>The unknown Morph in a sentence with one unknown Morph.</p>
                <h3 id="mmi">MorphMan Index (MMI)</h3>
                <p>
                  MorphMan sorts your cards in accordance with their MorphMan
                  Index. MorphMan Index is based on the
                  <em>number of unique unknown Morphs</em>, the
                  <em>length</em> of the sentence, and the
                  <em>usefulness score</em> of the unknown Morphs.
                </p>
                <p>
                  The formula is: <br /><code
                    >MMI = (100,000*N_k) + (1,000*lenDiff ) + (99,999 - min(
                    99,999 , usefulness ))</code
                  >, where:
                </p>
                <ul>
                  <li>MMI = MorphMan Index</li>
                  <li>N_k = number of unique unknown Morphs</li>
                  <li>
                    lenDiff = min( 9, length_of_sentence over ‘max good sentence
                    length’ or under ‘min good sentence length’ )
                  </li>
                  <li>
                    usefulness =
                    <ul>
                      <li>
                        ‘frequency.txt weight scale’*(frequency_len –
                        frequency_index) +
                      </li>
                      <li>priority_weight +</li>
                      <li>verb_bonus +</li>
                      <li>avg_freq_of_focus_morpheme_in_all_cards +</li>
                      <li>reinforce_weight</li>
                    </ul>
                  </li>
                </ul>
                <p>
                  In other words, cards are first sorted by
                  <em>the number of unknown Morphs they contain</em>. This means
                  that 0T cards (or what MorphMan calls “comprehension” and
                  “fresh vocab” cards) will be at the very top (although in
                  <nuxt-link class="link3" to="#general"
                    >MorphMan Preferences</nuxt-link
                  >
                  you can tell MorphMan to always skip these cards). Then 1T
                  cards, then MT cards.
                </p>
                <p>
                  Cards with the same number of unknown Morphs are then further
                  sorted using a point system. The more points a card has, the
                  higher it will be sorted. Points are calculated using the
                  following criteria:
                </p>
                <ul>
                  <li>
                    Cards with sentences that are too long or too short are
                    penalized. For each Morph under the “minimum good sentence
                    length” or above the “maximum good sentence length”, 1,000
                    points are deducted. There is a maximum penalty of 9,000. By
                    default, the “minimum good sentence length” is 2 and the
                    “maximum good sentence length” is 8. This can be changed in
                    config.py.
                  </li>
                  <li>
                    Cards with unknown Morphs contained in frequency.txt are
                    boosted proportionally to how high their position is in
                    frequency.txt. The formula for determining the boost is, for
                    each unknown Morph contained in frequency.txt, “‘total
                    number of words in frequency.txt’ minus ‘position in
                    frequency.txt’, times ‘frequency weight'”. The default the
                    “frequency weight” is 10. This can be changed in config.py.
                  </li>
                  <li>
                    Cards with Morphs contained in priority.db are boosted. By
                    default, for each unknown Morph contained in priority.db,
                    200 points are added. This amount can be changed in
                    config.py.
                  </li>
                  <li>
                    If at least one of the unknown Morphs in a card is a verb,
                    the card is given a flat boost. By default, the boost is 100
                    points. This amount can be changed in config.py.
                  </li>
                  <li>
                    Cards are boosted proportionally to how frequently their
                    unknown Morphs show up within the portion of your Anki
                    collection that MorphMan looks at. By default, for every
                    occurrence of the unknown Morph in your collection, 5 points
                    are added. This can be changed in config.py. If a card
                    contains multiple unknown Morphs, the boost is calculated
                    using the average number of occurrences of each unknown
                    Morph.
                  </li>
                  <li>
                    Cards with unmature (“known” but not yet “mature”) Morphs
                    are boosted. The boost is calculated by dividing the
                    “reinforce new vocab weight” by the interval of the most
                    mature card containing that Morph. For Morphs whose most
                    mature card has an interval of less than 1 day, .5 is used
                    in place of the interval. If a card contains multiple
                    unmature Morphs, the points for each Morph are added up. The
                    default “reinforce new vocab weight” is set to 5. This can
                    be changed in config.py.
                  </li>
                </ul>
                <h1 id="installation">Installation</h1>
                <p>
                  You can download MorphMan for Anki 2.1
                  <nuxt-link
                    class="link3"
                    to="https://ankiweb.net/shared/info/900801631"
                    rel="noopener"
                    >here</nuxt-link
                  >. The Anki 2.0 version can be found
                  <nuxt-link
                    class="link3"
                    to="https://github.com/kaegi/MorphMan"
                    rel="noopener"
                    >here</nuxt-link
                  >.
                </p>
                <p>
                  In order to keep track of what you know, MorphMan uses a
                  parsing dictionary to divide up sentences into individual
                  words. In the case of Japanese, MorphMan doesn’t come with its
                  own parsing dictionary, and the user must install one
                  separately in order for MorphMan to function. For languages
                  other than Japanese, parsing dictionaries comes pre-packaged
                  with MorphMan.
                </p>
                <p>
                  Note: parsing dictionaries are only for parsing and can’t
                  actually be used to obtain definitions for words.
                </p>
                <p>
                  The most advanced Japanese parsing dictionary currently
                  available for MorphMan is the MeCab UniDic dictionary, which
                  you can add to MorphMan simply by installing
                  <nuxt-link
                    class="link3"
                    to="https://ankiweb.net/shared/info/13462835"
                    rel="noopener"
                    >this add-on</nuxt-link
                  >. Once the add-on is installed, simply restart Anki and
                  MorphMan will automatically start using MeCab UniDic for
                  parsing.
                </p>
                <p>
                  The
                  <nuxt-link
                    class="link3"
                    to="https://ankiweb.net/shared/info/278530045"
                    rel="noopener"
                    >MIA Japanese</nuxt-link
                  >
                  or
                  <nuxt-link
                    class="link3"
                    to="https://ankiweb.net/shared/info/3918629684"
                    rel="noopener"
                    >Japanese Support</nuxt-link
                  >
                  add-ons also come with pre-packaged Japanese parsing
                  dictionaries. If either one of these is installed, MorphMan
                  will be able to use their parsing dictionary to function. It’s
                  important to note that the dictionaries packaged with MIA
                  Japanese and Japanese Support are not as advanced as MeCab
                  UniDic, and will produce inferior parsing results.
                </p>
                <p>
                  MeCab UniDic and MIA Japanese are only available for Anki 2.1,
                  so Japanese Support is the only option available to Anki 2.0
                  users.
                </p>
                <p>
                  If you’re currently a MorphMan user who relies on either MIA
                  Japanese’s or Japanese Support’s parsing dictionary, simply by
                  installing the MeCab UniDic add-on, MorphMan will
                  automatically begin prioritizing MeCab UniDic over the others.
                  It’s important to note that
                  <strong
                    >after upgrading to MeCab UniDic, it’s a good idea to
                    re-generate your MorphMan database from scratch using the
                    new dictionary</strong
                  >. In order to do this, simply delete your
                  <nuxt-link class="link3" to="#all.db">all.db</nuxt-link> and
                  then run Recalc.
                </p>
                <h1 id="setup">Setup</h1>
                <p>
                  <img
                    class="aligncenter wp-image-3209"
                    src="https://massimmersionapproach.com/imgs/k0.png.png"
                    alt=""
                    width="400"
                    height="85"
                  />
                </p>
                <p>
                  After installing MorphMan, you will find that the following
                  changes have been made to Anki:
                </p>
                <ul>
                  <li>
                    There is now “<em>K0V0</em>” to the right of the “Sync”
                    button. It looks like a button, but it’s not. The 0’s to the
                    right of the “K” and “V” represent how many Morphs you know.
                    It can be motivating to watch these numbers increase over
                    time. For languages other than Japanese, the two numbers
                    will always be the same; for Japanese, they will slightly
                    differ.
                  </li>
                  <li>
                    The “K” stands for <em><strong>K</strong>nown</em>, and is
                    the most accurate representation of how many unique Morphs
                    you know. For example, 余り, あまり, あんま, and あんまり
                    will all be counted as the same Morph. The “V” stands for
                    <em><strong>V</strong>ariation</em>. For Japanese, it tends
                    to count different forms (or orthography
                    <em><strong>V</strong>ariations</em>) of the same word as
                    unique Morphs. For example, 余り, あまり, あんま, and
                    あんまり will all be counted as different Morphs. Because of
                    this, the “V” count will be artificially larger than your
                    true number of unique known Morphs.
                  </li>
                  <li>
                    Seven new options under “Edit” tab in the browser:
                    “MorphMan: View Morphemes”, “MorphMan: Extract Morphemes”,
                    “MorphMan: Batch Play”, “MorphMan: Mass Tagger”, “MorphMan:
                    Learn Now”, “MorphMan: Browse Morphs”, and “MorphMan:
                    Already Known Tagger.” What each of these features does will
                    be explained later in the guide.
                  </li>
                  <li>
                    Four new options in the “Tools” menu: “MorphMan Recalc”,
                    “MorphMan Preferences”, “MorphMan Database Manager”, and
                    “MorphMan Readability Analyzer.” All you really need to
                    worry about “Recalc” and “Preferences.” “Preferences” is
                    where you configure everything, and “Recalc” is kind of like
                    the “go!” button. “Database Manager” has some useful
                    features, but isn’t crucial to MorphMan’s main functions;
                    all the important components of database management are done
                    for you automatically. “Readability Analyzer” lets you test
                    how comprehensible texts are likely to be based on how many
                    known and unknown words they contain.
                  </li>
                </ul>
                <p>
                  Although you control most of MorphMan’s settings in
                  “Preferences”, there are some other options that are
                  controlled in “config.py”, a file that automatically gets
                  downloaded into the following directory when installing
                  MorphMan:
                  <code
                    >C:\Users\[user]\AppData\Roaming\Anki2\addons21\900801631\morph\config.py</code
                  >
                  (on Anki 2.0:
                  <code
                    >C:\Users\[user]\AppData\Roaming\Anki2\addons\morph\config.py</code
                  >). The default config.py settings are just fine, so you don’t
                  need to mess with them if you don’t want to. But for those
                  interested, I will be explaining how to tinker with it
                  <nuxt-link class="link3" to="#config"
                    >later in the post</nuxt-link
                  >.
                </p>
                <p>
                  All of this might sound very complicated at first, but
                  really,<strong>
                    all you need to get started is to configure “Preferences”,
                    make a small adjustment to your note-types, and then run
                    “Recalc.”</strong
                  >
                </p>
                <h2 id="preferences">MorphMan Preferences</h2>
                <p>
                  <img
                    class="aligncenter wp-image-3213"
                    src="https://massimmersionapproach.com/imgs/preferences1.png"
                    alt=""
                    width="400"
                    height="119"
                    srcset="
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/preferences1.png        413w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/preferences1-300x89.png 300w
                    "
                    sizes="(max-width: 400px) 100vw, 400px"
                  />
                </p>
                <h3>Note Filter</h3>
                <p>
                  <img
                    class="aligncenter wp-image-3223"
                    src="https://massimmersionapproach.com/imgs/preferences_note_filter4.png"
                    alt=""
                    width="700"
                    height="359"
                    srcset="
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/preferences_note_filter4.png         935w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/preferences_note_filter4-300x154.png 300w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/preferences_note_filter4-768x393.png 768w
                    "
                    sizes="(max-width: 700px) 100vw, 700px"
                  />
                </p>
                <p>
                  This is where you tell MorphMan which fields of which cards
                  you want it to analyze. If you skip this step, MorphMan will
                  have nothing to work with and not function. Whenever MorphMan
                  talks about your “collection”, really it only means the
                  portions of your collection that you specify in the Note
                  Filter.
                </p>
                <p>
                  The instructions listed are mostly self-explanatory. Note that
                  if you uncheck “Modify?”, MorphMan will analyze the specified
                  fields of cards (and update the database of learned/mature
                  Morphs based on them), but won’t actually reorder them. If
                  you’re on Windows 10, you may have to extend the entire
                  “MorphMan Preferences” windows in order for the “Modify?”
                  checkbox to appear. It may also let you type text next to the
                  checkbox, but this is simply a glitch.
                </p>
                <p>
                  <img
                    class="aligncenter wp-image-3421"
                    src="https://massimmersionapproach.com/imgs/note-filter-order.png"
                    alt=""
                    width="700"
                    height="352"
                    srcset="
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/10/note-filter-order.png         952w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/10/note-filter-order-300x151.png 300w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/10/note-filter-order-768x386.png 768w
                    "
                    sizes="(max-width: 700px) 100vw, 700px"
                  />
                </p>
                <p>
                  It’s important to note that if you have overlapping filters,
                  whichever filter is listed first will take priority (hence the
                  “Up” and “Down” buttons). For example, in the picture above,
                  <em>no</em> cards with the “MIA Japanese” note type will be
                  reordered, because the first filter, which takes priority,
                  encompasses <em>all</em> “MIA Japanese” cards (and leaves
                  “Modify?” unchecked).
                </p>
                <p>
                  In this example, in order to make “MIA Japanese” cards
                  <em>with</em> the “Tango” tag be reordered, and “MIA Japanese”
                  cards <em>without</em> the tag only be analyzed, the order of
                  the two filters must be switched.
                </p>
                <h3>Extra Fields</h3>
                <p>
                  <img
                    class="aligncenter wp-image-3224"
                    src="https://massimmersionapproach.com/imgs/preferences_extra_fields2.png"
                    alt=""
                    width="700"
                    height="359"
                    srcset="
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/preferences_extra_fields2.png         935w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/preferences_extra_fields2-300x154.png 300w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/preferences_extra_fields2-768x393.png 768w
                    "
                    sizes="(max-width: 700px) 100vw, 700px"
                  />
                </p>
                <p>
                  MorphMan has the ability to auto-fill up to seven different
                  fields with specific information about your cards. This will
                  only apply to cards specified in the “Note Filter” tab. In the
                  “Extra Fields” tab, you can customize the names of each of
                  these seven fields. In order for MorphMan to auto-fill the
                  fields, you have to add each corresponding field to your
                  note-types.
                </p>
                <p>
                  The “Focus Morph” field is used in other features, so it must
                  be added to your specified note-types for MorphMan to work
                  properly. The other six fields are entirely optional; if you
                  don’t want them, simply don’t add them to your note-type.
                  MorphMan will update the contents of these fields after a
                  <nuxt-link class="link3" to="#recalc">Recalc</nuxt-link>.
                </p>
                <p>The Six Fields are as follows:</p>
                <ul>
                  <li>
                    <strong>Focus Morph</strong>: The unknown Morph in sentences
                    with one unmature Morph. Cleared once all Morphs are mature.
                    If a card is not 1T, this field will be left blank.
                  </li>
                  <li>
                    <strong>Unmatures</strong>: Comma-separated list of unmature
                    Morphs.
                  </li>
                  <li>
                    <strong>Unknowns</strong>: Comma-separated list of unknown
                    Morphs.
                  </li>
                  <li>
                    <strong>Unknown Frequency</strong>: Average of how many
                    times the unknown Morphs appear in the specified portion of
                    your collection.
                  </li>
                  <li>
                    <strong>MorphMan Index</strong>: Detailed explanation
                    <nuxt-link class="link3" to="#mmi">here</nuxt-link>. Roughly
                    corresponds to the difficulty of the card. The ‘due’ time of
                    card will be set to this value.
                  </li>
                  <li>
                    <strong>Unmatures Count</strong>: Number of unmature Morphs
                    on this note.
                  </li>
                  <li>
                    <strong>Unknown Count</strong>: Number of unknown Morphs on
                    this note.
                  </li>
                </ul>
                <p>
                  Personally, I would only add “Focus Morph” in order to keep
                  card templates as clean as possible.
                </p>
                <h3>Tags</h3>
                <p>
                  <img
                    class="aligncenter wp-image-3225"
                    src="https://massimmersionapproach.com/imgs/2019/09/preferences_tags1.png"
                    alt=""
                    width="700"
                    height="359"
                  />
                </p>
                <p>
                  As part of the process of sorting cards based on their
                  difficult, MorphMan automatically adds and removes tags to the
                  cards you specified in the “Note Filter” tab. In the “Tags”
                  tab, you can customize the names of the different tags, as
                  well as select if you want MorphMan to add all, or only the
                  required minimum, of the possible tags to your cards.
                </p>
                <p>The different tags are as follows:</p>
                <ul>
                  <li>
                    <strong>Vocab note</strong>: Note that is
                    <nuxt-link
                      class="link3"
                      to="https://massimmersionapproach.com/table-of-contents/tools/glossary/#1T"
                      >1T</nuxt-link
                    >
                    (contains one unknown Morph).
                  </li>
                  <li>
                    <strong>Fresh vocab note</strong>: Note that contains no
                    unknown Morphs, but one or more unmature Morphs.
                  </li>
                  <li>
                    <strong>Comprehension note</strong>: Note that is
                    <nuxt-link
                      class="link3"
                      to="https://massimmersionapproach.com/table-of-contents/tools/glossary/#0T"
                      >0T</nuxt-link
                    >
                    (contains only mature Morphs).
                  </li>
                  <li>
                    <strong>Not ready</strong>: Note that is
                    <nuxt-link
                      class="link3"
                      to="https://massimmersionapproach.com/table-of-contents/tools/glossary/#MT"
                      >MT</nuxt-link
                    >
                    (contains two or more unknown Morphs).
                  </li>
                  <li>
                    <strong>Already k</strong><strong>nown</strong>: A tag that
                    you can manually add to notes to tell MorphMan that you
                    already know all the Morphs contained in the note. After a
                    <nuxt-link class="link3" to="#recalc">Recalc</nuxt-link>,
                    MorphMan will add all the Morphs contained in notes with
                    this tag to the database of Mature Morphs. “K” (for
                    <em><strong>K</strong>nown</em>) is the hotkey for adding
                    this tag to a card while reviewing or in the browser.
                  </li>
                  <li>
                    <strong>Priority</strong>: Note contains a Morph that is
                    contained in priority.db. Will be ordered higher than Notes
                    that would otherwise have the same
                    <nuxt-link class="link3" to="#mmi">MorphMan Index</nuxt-link
                    >.
                  </li>
                  <li>
                    <strong>Too Short</strong>: Sentence in the specified field
                    is too short. The threshold can be edited in
                    <nuxt-link class="link3" to="#configedit"
                      >config.py</nuxt-link
                    >.
                  </li>
                  <li>
                    <strong>Too Long</strong>: Sentence in the specified field
                    is too long. The threshold can be edited in
                    <nuxt-link class="link3" to="#configedit"
                      >config.py</nuxt-link
                    >.
                  </li>
                  <li>
                    <strong>Frequency</strong>: Note contains a Morph that is
                    contained in frequency.txt.
                  </li>
                </ul>
                <p>
                  By unchecking the “Add tags even if not required” box, only
                  the “Vocab”, “Fresh Vocab”, “Comprehension” and “Not Ready”
                  tags will be added to cards.
                </p>
                <p>
                  Note that, although MorphMan will only ever change the
                  <em>scheduling</em> of new cards, tags will still be added to
                  cards you’ve already learned. This means that, for example,
                  the “Comprehension” tag will be added to cards you know,
                  signifying that they are 0T. But this doesn’t mean that those
                  cards will be skipped when you review. Only <em>new</em> cards
                  with the “Comprehension” tag will be skipped.
                </p>
                <p>
                  Also note that, with the exception of the “Already known” tag,
                  manually adding tags to cards will not affect MorphMan. For
                  example, let’s say that MorphMan said a certain card is 1T,
                  but in reality, it’s MT. Even if you manually add the “Not
                  ready” tag to this card, MorphMan will simply ignore this and
                  remove the tag after the next Recalc.
                </p>
                <h3 id="general">General</h3>
                <p>
                  <img
                    class="aligncenter wp-image-3229"
                    src="https://massimmersionapproach.com/imgs/2019/09/preferences_general1.png"
                    alt=""
                    width="700"
                    height="359"
                  />
                </p>
                <p>
                  Because the MorphMan Index is based on the expected difficulty
                  of cards, 0T (“comprehension”/”fresh vocab”) cards end up
                  being prioritized before 1T (“vocab”) cards. Because studying
                  0T sentences is mostly a waste of time, you are given the
                  option to have MorphMan automatically skip over
                  “comprehension” and “fresh vocab” cards, as well as “vocab”
                  cards whose
                  <nuxt-link class="link3" to="#focus">Focus Morph</nuxt-link>
                  was already studied that day. In other words, by checking off
                  all three of these boxes in the general tab, you can have
                  MorphMan only show you 1T cards.
                </p>
                <p>
                  “Ignore everything contained within [] brackets” is an option
                  intended for use with the
                  <nuxt-link
                    class="link3"
                    to="https://ankiweb.net/shared/info/278530045"
                    rel="noopener"
                    >MIA Japanese</nuxt-link
                  >
                  add-on. MIA Japanese adds readings and pitch accents directly
                  into the fields of cards in the form of a simple syntax
                  involving brackets. For example, if readings and pitch accents
                  were generated for “走る”, it would appear as “走[はし;k2]る”
                  in the field. In order for MorphMan to correctly identify this
                  as “走る”, it must ignore brackets and the contents of
                  brackets. So, make sure to check this box if you’re using the
                  MIA Japanese add-on.
                </p>
                <h2 id="types">Note-Types</h2>
                <p>
                  <img
                    class="aligncenter wp-image-3244"
                    src="https://massimmersionapproach.com/imgs/2019/09/note-type_target.gif"
                    alt=""
                    width="600"
                    height="486"
                  />
                </p>
                <p>
                  Like I explained in the Extra Fields portion of the previous
                  section, you need to add (at least) the “Focus Morph” field to
                  all the note-types that MorphMan will be analyzing.
                </p>
                <h3>MorphMan-specific CSS</h3>
                <p>
                  While you’re editing your note-types, there is also some
                  MorphMan-specific CSS that you can use to automatically
                  color-code sentences based on the learning status of their
                  Morphs. This MorphMan-specific CSS will only work on the
                  desktop version of Anki; on mobile, text will continue to
                  appear in its original color.
                </p>
                <p>
                  <img
                    class="aligncenter wp-image-3254"
                    src="https://massimmersionapproach.com/imgs/2019/09/note-type_color1.png"
                    alt=""
                    width="700"
                    height="427"
                  />
                </p>
                <p>
                  To add the MorphMan-specific CSS, in one of the HTML sections,
                  choose which field you want to add color-coding to, and add
                  <code>morphHighlight:</code> inside of the curly brackets,
                  before the field name. Then, add the following to the bottom
                  of the CSS section:
                </p>
                <p>
                  <code>[mtype=unknown] { color: red; }</code> <br /><code
                    >[mtype=seen] { color: orange; }</code
                  >
                  <br /><code>[mtype=known] { color: green; }</code> <br /><code
                    >[mtype=mature] { color: blue; }</code
                  >
                  <br /><code
                    >[priority=true] { text-decoration: underline; }</code
                  >
                  <br /><code
                    >[frequency=true] { text-decoration: underline; }</code
                  >
                </p>
                <p>
                  It’s also possible to use “background-color” instead of
                  “color”, in order to reserve “color” for the color-coding of
                  pitch accent. Below is our personal coloring scheme (unknown =
                  yellow, seen = orange, known = green, mature = gray):
                </p>
                <p>
                  <code>[mtype=unknown] { background-color: #ffff99; }</code>
                  <br /><code>[mtype=seen] { background-color: #ffd1b3; }</code>
                  <br /><code
                    >[mtype=known] { background-color: #b3e6cc; }</code
                  >
                  <br /><code
                    >[mtype=mature] { background-color: #f2f2f2; }</code
                  >
                </p>
                <p>
                  Unfortunately,
                  <strong
                    >the MorphMan-specific CSS is not compatible with the
                    Japanese Support add-on’s “furigana” feature or any of the
                    MIA Japanese add-on’s display types</strong
                  >.
                </p>
                <p>
                  <img
                    class="aligncenter wp-image-3256"
                    src="https://massimmersionapproach.com/imgs/2019/09/css-with-mia-japanese.gif"
                    alt=""
                    width="800"
                    height="419"
                  />
                </p>
                <p>
                  So, in order to use the MorphMan-specific CSS in combination
                  with one of these add-ons, you will need to have two sentence
                  fields on your cards: one for displaying furigana/pitch accent
                  coloring, and another for displaying MorphMan-specific CSS:
                </p>
                <p>
                  <img
                    class="aligncenter wp-image-3258"
                    src="https://massimmersionapproach.com/imgs/2019/09/css-two-fields1.png"
                    alt=""
                    width="700"
                    height="288"
                  />
                </p>
                <p>
                  Because of this hassle,
                  <strong
                    >we recommend simply not bothering with the
                    MorphMan-specific CSS</strong
                  >. Instead, consider having the “Target” field displayed on
                  the back of your cards, so you can be sure what the target
                  word of the sentence is.
                </p>
                <p>
                  If you do choose to use the MorphMan-specific CSS, we
                  recommend only putting it on the <em>back</em> of cards. The
                  reason for this is that, in order to get the best results, you
                  want your SRS experience to simulate real life as much as
                  possible. When reading in real life, you aren’t going to be
                  told which words you know and which you don’t. So, it makes
                  sense to have your sentence cards reflect this.
                </p>
                <p>
                  If you still don’t see any color after adding the MorphMan
                  CSS, don’t worry. In order for it to take effect, you first
                  need to run “Recalc”, which will and have MorphMan analyze
                  your collection and create the database it will use to color
                  your cards.
                </p>
                <h2 id="frequency">frequency.txt</h2>
                <p>
                  MorphMan allows users to manually import a frequency list,
                  which MorphMan will use to prioritize cards with
                  high-frequency Focus Morphs.
                </p>
                <p>
                  <img
                    class="aligncenter wp-image-3367"
                    src="https://massimmersionapproach.com/imgs/2019/09/morphman-freqtxt1.png"
                    alt=""
                    width="175"
                    height="251"
                  />
                </p>
                <p>
                  In order for MorphMan to recognize a frequency list, it must
                  be formatted as a text file titled “frequency.txt”, which
                  contains one word on each line. Once you place a
                  “frequency.txt” file in the
                  <nuxt-link class="link3" to="#db">database folder</nuxt-link>,
                  MorphMan will automatically begin using it to sort cards next
                  time you run Recalc.
                </p>
                <p>
                  Please see the
                  <nuxt-link class="link3" to="#mmi">MorphMan Index</nuxt-link>
                  section to understand exactly how adding a frequency list
                  affects MorphMan’s sorting algorithm.
                </p>
                <p>
                  It’s important to note that there are two factors that
                  influence how heavily frequency is weighted in MorphMan’s
                  overall algorithm: “frequency weight” (a value specified in
                  <nuxt-link class="link3" to="#config">config.py</nuxt-link>)
                  and frequency list length. When frequency list length is
                  equal, the greater the “frequency weight”, the more heavily
                  frequency will be weighted in the overall algorithm. The
                  default “frequency weight” is 10, but can be changed in
                  config.py. Additionally, assuming “frequency weight” is equal,
                  the longer the length of the frequency list, the more heavily
                  frequency will be weighted in the overall algorithm.
                </p>
                <p>
                  Due to the way MorphMan’s algorithm is structured, if
                  frequency is weighted too heavily, cards that are too long or
                  too short (but have high-frequency Focus Morphs) could
                  potentially be ranked above cards that are the ideal length.
                  This is problematic because sentences that are excessively
                  long or short are difficult to learn from.
                </p>
                <p>
                  In order to ensure that this doesn’t happen, we recommend
                  dividing 10,000 by your frequency list length, and setting
                  that as your “frequency weight”. For example, if you’re using
                  a frequency list that’s 1k words long, set your “frequency
                  weight” to 10 (10k / 1k = 10). If you’re using a frequency
                  list that’s 10k words long, set your “frequency weight” to 1
                  (10k / 10k = 1).
                </p>
                <p>
                  In general, longer frequency lists are preferable, as they
                  provide more coverage. That said, it’s also important to take
                  into account the fact that longer frequency lists will make
                  running Recalc take longer.
                </p>
                <p>
                  <img
                    class="aligncenter wp-image-3359"
                    src="https://massimmersionapproach.com/imgs/2019/09/morphman-freq-config.png"
                    alt=""
                    width="600"
                    height="125"
                  />
                </p>
                <p>
                  You can download a 20k word frequency.txt for Japanese
                  <nuxt-link
                    class="link3"
                    to="https://www.mediafire.com/file/wdsca3u3xsyjw7r/frequency.txt/file"
                    rel="noopener"
                    >here</nuxt-link
                  >. You can download a 20k word frequency.txt for Chinese
                  <nuxt-link
                    class="link3"
                    to="https://www.mediafire.com/file/3yvegfbq85zdtgd/frequency.txt/file"
                    rel="noopener"
                    >here</nuxt-link
                  >. The Japanese list was created from all of the Japanese
                  subtitles on Netflix, and the Chinese list was created from
                  the
                  <nuxt-link
                    class="link3"
                    to="https://www.plecoforums.com/threads/word-frequency-list-based-on-a-15-billion-character-corpus-bcc-blcu-chinese-corpus.5859/"
                    rel="noopener"
                    >BLCU Chinese Corpus frequency list</nuxt-link
                  >. When using these frequency lists, set your “frequency
                  weight” to .5.
                </p>
                <p>
                  You can also use the Readability Analyzer to generate your own
                  original frequency.txt from target-language text.
                </p>
                <h2 id="recalc">MorphMan Recalc</h2>
                <p>
                  <img
                    class="aligncenter wp-image-3271"
                    src="https://massimmersionapproach.com/imgs/2019/09/recalc2.gif"
                    alt=""
                    width="400"
                    height="209"
                  />
                </p>
                <p>
                  Once you have set up “MorphMan Preferences” and configured
                  your note-types, all you have to do is run “Recalc” and you
                  are ready to go. “Recalc” stands for “recalculation”, and is
                  basically the command that tells MorphMan to work all its
                  magic. When you run Recalc, MorphMan will do the following:
                </p>
                <ul>
                  <li>
                    Go through the specified portion of your collection and
                    generate/update the “<nuxt-link class="link3" to="#all.db"
                      >all.db</nuxt-link
                    >“, “<nuxt-link class="link3" to="#mature.db"
                      >mature.db</nuxt-link
                    >“, “<nuxt-link class="link3" to="#known.db"
                      >known.db</nuxt-link
                    >” and “<nuxt-link class="link3" to="#seen.db"
                      >seen.db</nuxt-link
                    >” databases.
                  </li>
                  <li>
                    Merge the “<nuxt-link class="link3" to="#external.db"
                      >external.db</nuxt-link
                    >” database with the four databases mentioned above.
                  </li>
                  <li>
                    Update MorphMan-related fields and tags, as specified in
                    “Preferences.”
                  </li>
                  <li>
                    Reorder your new cards based on their
                    <nuxt-link class="link3" to="#mmi">MorphMan Index</nuxt-link
                    >.
                  </li>
                </ul>
                <p>
                  Basically, after learning 1T cards in a repping session, cards
                  that were previously 1T will have become 0T, and cards that
                  were previously MT will have become 1T. When you run Recalc,
                  MorphMan will go through your collection, recalculate the
                  difficulty of your cards based on your new knowledge, and
                  reorder your new cards in a way that’s optimal for the
                  <em>new you</em>: the you who knows more than you did
                  yesterday.
                </p>
                <p>
                  You can run Recalc as often as you like. It’s a good idea to
                  run it at least once a day so that your new cards will always
                  appear in the most optimal order. MorphMan will also prompt
                  you to run Recalc after closing Preferences. The hotkey for
                  Recalc is “Ctrl+M”.
                </p>
                <h1 id="usage">Usage</h1>
                <p>
                  MorphMan works by reordering your New Card Queue, so make sure
                  that “Show new cards in order added” is selected in the New
                  Cards tab of your option group settings. Although the setting
                  is called “Show new cards in <em>order added</em>“, it really
                  means “show new cards in the order of the New Card Queue.” If
                  you select the other option, “Show new cards in random order”,
                  you will bypass the New Card Queue and render MorphMan
                  useless.
                </p>
                <p>
                  <img
                    class="aligncenter wp-image-3279"
                    src="https://massimmersionapproach.com/imgs/new-cards-in-order-added1.png"
                    alt=""
                    width="400"
                    height="404"
                    srcset="
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/new-cards-in-order-added1.png         490w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/new-cards-in-order-added1-297x300.png 297w
                    "
                    sizes="(max-width: 400px) 100vw, 400px"
                  />
                </p>
                <p>
                  After MorphMan sorts your cards, there are two main ways to
                  proceed. The first is to jump right into repping, and iron out
                  any kinks in your cards as you go. The second is to go into
                  the browser, look at your newly sorted New Card Queue, and
                  touch things up ahead of time.
                </p>
                <p>
                  If you’re using a fully-loaded pre-made deck (which includes
                  the definitions of words), the “polish while repping” option
                  may work well. If you’re using MorphMan with subs2srs and need
                  to add definitions manually, the “polish in the browser”
                  option may be more practical.
                </p>
                <p>
                  <strong
                    >If you mainly do your reps on AnkiWeb, Anki Mobile, or
                    AnkiDroid, the “polish on the go” option will be very
                    limited.</strong
                  >
                </p>
                <p>
                  The
                  <nuxt-link
                    class="link3"
                    to="https://youtu.be/tM3yDVN9cBQ?t=138"
                    rel="noopener"
                    >MIA Dictionary add-on</nuxt-link
                  >
                  allows you to automate the process of adding definitions to 1T
                  cards. This makes the “polish while repping” option much more
                  viable for use with subs2srs decks as well. Currently, the MIA
                  Dictionary add-on is in the beta stage of development, and is
                  only available to
                  <nuxt-link
                    class="link3"
                    to="https://www.patreon.com/massimmersionapproach"
                    rel="noopener"
                    >MIA patrons</nuxt-link
                  >. The add-on should be freely availed to the public within a
                  few months.
                </p>
                <h2 id="browser">In the Browser</h2>
                <p>
                  The way to go about touching things up before repping is
                  pretty straightforward. Go into the browser, and for the deck
                  you want to work with, find all the new cards with the “Vocab”
                  (1T) tag.
                </p>
                <ul>
                  <li>
                    “deck:<em>deck name</em>” is the syntax for finding cards in
                    a specific deck (if the deck name contains spaces, the whole
                    thing needs to be in quotations).
                  </li>
                  <li>“is:new” is the syntax for finding new cards.</li>
                  <li>
                    “tag:<em>TagName</em>” is the syntax for finding cards with
                    a given tag.
                  </li>
                  <li>
                    “-is:suspended” is the syntax to exclude suspended cards.
                  </li>
                </ul>
                <p>
                  By going to “Filter… &gt; Save Current Filter…”, you can save
                  the search for easy access later.
                </p>
                <p>
                  <img
                    class="aligncenter wp-image-3286"
                    src="https://massimmersionapproach.com/imgs/before-repping1.png"
                    alt=""
                    width="800"
                    height="592"
                    srcset="
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/before-repping1.png          1126w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/before-repping1-300x222.png   300w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/before-repping1-768x568.png   768w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/before-repping1-1024x758.png 1024w
                    "
                    sizes="(max-width: 800px) 100vw, 800px"
                  />
                </p>
                <p>
                  Once you have pulled up all your new cards that are 1T, sort
                  them by “Due”. This will allow you to see your newly sorted
                  New Card Queue. From here, you can add definitions to cards
                  that look good, and suspend or delete cards that don’t.
                </p>
                <p>
                  <img
                    class="aligncenter wp-image-3288"
                    src="https://massimmersionapproach.com/imgs/browser-edit2.png"
                    alt=""
                    width="400"
                    height="367"
                    srcset="
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/browser-edit2.png         473w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/browser-edit2-300x275.png 300w
                    "
                    sizes="(max-width: 400px) 100vw, 400px"
                  />
                </p>
                <p>
                  MorphMan also adds seven new options to the “Edit” tab of the
                  browser:
                </p>
                <ul>
                  <li>
                    <strong id="view"
                      >MorphMan: View Morphemes (Ctrl+Shift+V)</strong
                    >: Brings up pop-up window showing the Morphs contained in
                    the selected cards. Will use the field specified in the
                    “Note Filter” tab of Preferences. If no field is specified,
                    the first field of the card will be used.
                  </li>
                  <li>
                    <strong id="extract"
                      >MorphMan: Extract Morphemes (Ctrl+Shift+E)</strong
                    >: Extracts Morphs from selected cards and lets you save
                    them to a .db file. Will use the field specified in the
                    “Note Filter” tab of Preferences. If no field is specified,
                    the first field of the card will be used.
                  </li>
                  <li id="batchplay">
                    <strong>MorphMan: Batch Play (Ctrl+Shift+P)</strong>: Batch
                    play all the media of the selected cards. Useful when you
                    want to hear the same word pronounced in multiple contexts.
                    Must add the name of the media field to
                    <nuxt-link class="link3" to="#configedit"
                      >config.py</nuxt-link
                    >
                    for it to work.
                  </li>
                  <li>
                    <strong id="mass-tagger"
                      >MorphMan: Mass Tagger (Ctrl+Shift+T)</strong
                    >: Allows you to add specific tags to all cards whose
                    specified field contains a Morph found in a specified .db
                    file (for example, add the tag “<em>TagName</em>” to all
                    selected cards that contain a Morph found in
                    <em>filename</em>.db).
                  </li>
                  <li>
                    <strong id="learn-now"
                      >MorphMan: Learn Now (Ctrl+Shift+N): Raises selected cards
                      to the top of the learning queue.</strong
                    >
                  </li>
                  <li>
                    <strong id="browse-morphs"
                      >MorphMan: Browse Morphs (L)</strong
                    >: Brings up all of the 1T cards that have the same Focus
                    Morph as the selected card. By using the hotkey “L”, this
                    feature can also be used while repping.
                  </li>
                  <li>
                    <strong id="already-known"
                      >MorphMan: Already Known Tagger (K)</strong
                    >: Add’s the “Already known” tag to the selected cards. By
                    using the hotkey “K” (for <em><strong>K</strong>nown</em>),
                    this feature can also be used while repping. When used while
                    repping, the card will also be buried.
                  </li>
                </ul>
                <h2 id="repping">While Repping</h2>
                <p>
                  MorphMan also has some features that make cleaning up cards on
                  the go a smooth process.
                </p>
                <p>
                  If “Skip card if focus morph was already seen today” is
                  checked off in “MorphMan Preferences” &gt; “General”, MorphMan
                  will continue to modify the New Card Queue while you rep to
                  ensure that you only see cards that are 1T.
                </p>
                <p>
                  For example, let’s say there are five 1T cards, all with the
                  same Focus Morph, at the top of your New Card Queue. After you
                  learn one of those cards while repping, the other four, which
                  are now 0T, will automatically be buried. Whenever this kind
                  of reordering happens while you’re reviewing, the following
                  notice will appear:
                </p>
                <p>
                  <img
                    id="skip"
                    class="aligncenter wp-image-1775"
                    src="https://massimmersionapproach.com/imgs/reorder.png"
                    alt=""
                    width="350"
                    height="149"
                    srcset="
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/01/reorder.png         413w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/01/reorder-300x128.png 300w
                    "
                    sizes="(max-width: 350px) 100vw, 350px"
                  />
                </p>
                <p>
                  Then, the next time you run Recalc, the cards that were
                  automatically buried will be officially tagged 0T.
                </p>
                <p>
                  Obviously, you won’t be able to benefit from this feature when
                  repping on mobile. An easy way to get around this is to simply
                  manually bury any 0T cards that come up when reviewing. Let’s
                  go back to the example of having five 1T cards with the same
                  Focus Morph: after you learn the first card, the next four
                  will become 0T. On mobile, those four 0T cards will still show
                  up. By simply burying them manually, you can avoid them for
                  the time being. Then later, once you run Recalc, MorphMan will
                  automatically move them to the bottom of your New Card Queue.
                </p>
                <p>
                  <img
                    class="aligncenter wp-image-3297"
                    src="https://massimmersionapproach.com/imgs/2019/09/morphman-learn-now.gif"
                    alt=""
                    width="700"
                    height="577"
                  />
                </p>
                <p>
                  Another possible situation is that a new 1T card comes up
                  while repping, but you think you might have a better 1T card
                  for the same Focus Morph in your deck, and you want to learn
                  that one instead. While repping, you can press the hotkey “L”
                  to open the browser and see all the other 1T cards in your
                  collection with the same Focus Morph.
                </p>
                <p>
                  From here, you can select your preferred card, and go to “Edit
                  &gt; MorphMan: Learn Now” (hotkey: Ctrl+Alt+N). This will
                  close the browser and make the selected card the next card you
                  will see while repping. Once you rep that card, any cards with
                  the same target morph will be automatically buried, as
                  explained above.
                </p>
                <h2 id="workingwith">Working with the Algorithm</h2>
                <p>
                  Sometimes MorphMan will say a card is 1T when it’s actually 0T
                  due to you knowing a Morph that wasn’t in your Anki
                  collection.
                </p>
                <p>
                  If you come across one of these cards while repping, use the
                  hotkey “K” (for <em><strong>K</strong>nown</em>) to add the
                  “Already known” tag to the card and bury it. When you do this,
                  any other cards with the same Focus Morph will automatically
                  be buried as well. Next time you run Recalc, MorphMan will add
                  all the Morphs contained in the card to your mature database.
                  You can also use the hotkey “K” to add the “Already known” tag
                  to cards in the browser as well.
                </p>
                <p>
                  On mobile, the “K” hotkey won’t be available. Instead, one
                  option is to simply mark and bury cards manually while
                  repping. Then later, once you have access to a desktop, add
                  the “Already known” tag to all marked cards in bulk.
                </p>
                <p>
                  There will also be times when MorphMan thinks an 0T card is 1T
                  due to incorrect parsing. Unfortunately, MorphMan isn’t that
                  smart. It’s prone to making basic mistakes like thinking two
                  different conjugations of the same word are actually two
                  unique words (not that this happens every time; in general,
                  MorphMan is pretty good with parsing conjugations).
                </p>
                <p>
                  The good news is that the longer you use MorphMan, the more
                  data it will accumulate, and the more accurate it will become.
                  So, try not to get discouraged if it seems especially
                  mistake-prone at first. Whenever MorphMan fails to recognize a
                  known word due to incorrect parsing, simply add the “Already
                  known” tag, run Recalc, and add that specific form of the word
                  to your database.
                </p>
                <p>
                  On the other hand, there will also be times when MorphMan says
                  a card is 1T, but you aren’t able to understand it. There are
                  two reasons this may occur. The first is that, due to
                  incorrect parsing, MorphMan thinks you know a word that you
                  don’t. Unfortunately, there is no easy way to remove a Morph
                  from MorphMan’s database. Luckily, this really shouldn’t
                  happen very often. When it does, your only real option is to
                  suspend or delete the card.
                </p>
                <p>
                  The other, much more likely scenario is that you still aren’t
                  able to understand a sentence deemed 1T despite it indeed
                  containing only one unknown word. This is simply a fact of
                  life when it comes to language learning. Sometimes you know
                  <em>all</em> the words in a sentence, but still just can’t get
                  what it means. It could be due to many things, such as one of
                  the words having an alternate meaning you haven’t learned yet,
                  or the grammar being too tricky for you parse at your current
                  level. Basically, although the sentence <em>appears</em> to be
                  1T, it’s actually MT. By definition, any sentence that’s truly
                  1T shouldn’t be difficult to understand.
                </p>
                <p>
                  Whenever this happens, it’s always best to swiftly suspend or
                  delete the card and move on. The whole point of MorphMan is to
                  help you make fast progress by collecting low hanging fruit.
                  If you spend time mulling over things that are above your
                  level, you’re defeating the purpose of the add-on.
                </p>
                <h2 id="database_manager">MorphMan Database Manager</h2>
                <p>
                  The MorphMan Database Manager is a tool for manipulating
                  <nuxt-link class="link3" to="#db">database files</nuxt-link>.
                  Its most important feature is creating database files out of
                  text files. For example, let’s say you have a Japanese novel
                  formatted as a text file. You could input this text file into
                  the Database Manager, and have it output a database file with
                  all the Morphs contained in the novel.
                </p>
                <p>
                  If you named this database file “<nuxt-link
                    class="link3"
                    to="#external"
                    >external.db</nuxt-link
                  >“, and placed it in
                  <code
                    >C:\Users\[user]\AppData\Roaming\Anki2\[profile_name]\dbs</code
                  >, once you Recalc, MorphMan will add all of those Morphs to
                  your mature.db database. If you do a lot of learning outside
                  of MorphMan, this is a good way to catch MorphMan’s database
                  up to your current knowledge.
                </p>
                <p>
                  In a similar fashion, you could take the first few thousand
                  words from a frequency list, use the Database Manager to
                  convert that into a database file, name the file “<nuxt-link
                    class="link3"
                    to="#priority"
                    >priority.db</nuxt-link
                  >“, and place it in the same directory as above. Then, once
                  you run Recalc, MorphMan will give high-frequency words a
                  higher
                  <nuxt-link class="link3" to="#mmi">MorphMan Index</nuxt-link>,
                  increasing the efficiency of your learning.
                </p>
                <p>
                  The Database Manager is a little counter-intuitive to use, so
                  I decided to simply make a video instead of explaining
                  everything through text:
                </p>
              </div>
            </div>
          </div>

          <YouTubeEmbed src="https://youtube.com/embed/cOCisbsnYJs-9s" />

          <div
            data-id="059821d"
            class="elementor-element elementor-element-059821d elementor-widget elementor-widget-text-editor"
            data-element_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              <div class="elementor-text-editor elementor-clearfix">
                <p>
                  The above video was created before MorphMan had
                  <nuxt-link class="link3" to="#frequency"
                    >frequency list functionality</nuxt-link
                  >. Now that frequency lists are supported, the “priority.db”
                  feature is largely obsolete.
                </p>
                <h3 id="subs">Adaptive Subs</h3>
                <p>
                  The Database Manager also has a feature called “Adaptive
                  Subs,” which allows you to make custom subtitles files based
                  on your personal known.db and mature.db databases. For
                  example, you could create a subtitle file that only displays
                  subs for lines that contain unknown Morphs.
                </p>
                <p>
                  The feature is a bit of a hassle to set up and use and doesn’t
                  provide much practical value. If you would like to give it a
                  shot anyway, you can find an explanation of how to use the
                  feature
                  <nuxt-link
                    class="link3"
                    to="http://rtkwiki.koohii.com/wiki/Morph_Man#What_are_adaptive_subs.3F"
                    rel="noopener"
                    >here</nuxt-link
                  >. Note that in the current version of MorphMan, “target” must
                  be used in place of “jpn”, and “native” must be used in place
                  of “eng”.
                </p>
                <h2 id="analyzer">Readability Analyzer</h2>
                <p>
                  <img
                    class="aligncenter wp-image-3395"
                    src="https://massimmersionapproach.com/imgs/morphman-readability-analyzer.png"
                    alt=""
                    width="700"
                    height="421"
                    srcset="
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/morphman-readability-analyzer.png          1030w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/morphman-readability-analyzer-300x181.png   300w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/morphman-readability-analyzer-768x462.png   768w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/09/morphman-readability-analyzer-1024x616.png 1024w
                    "
                    sizes="(max-width: 700px) 100vw, 700px"
                  />
                </p>
                <p>
                  MorphMan’s Readability Analyzer allows users to run various
                  statistical analyses on the words contained within target
                  language texts. You can access it by going to “Tools &gt;
                  MorphMan Readability Analyzer” on Anki’s main page.
                </p>
                <p>
                  When inputted target-language text, the Readability Analyzer
                  has the ability to do four things:
                </p>
                <ul>
                  <li>
                    <strong>Readability Report</strong>: tell you what
                    percentage of words contained in the text you already know
                    (or to be exact, what percentage of the words are considered
                    Mature Morphs in your MorphMan database). The Readability
                    Report is outputted within the “Readability Analyzer”
                    window. Whether the “Readability Report” box is checked off
                    doesn’t change anything in the current version of MorphMan.
                  </li>
                  <li>
                    <strong>Word Report</strong>: outputs a list of all the
                    words contained within the text, along with various
                    information such as their part of speech and number of
                    occurrences within the text. Outputted in the form of a text
                    file placed in the “Output Directory”.
                  </li>
                  <li>
                    <strong>Target Study Plan</strong>: outputs a list of the
                    words, ordered by frequency, that you would need to learn to
                    reach the “Target %” percentage of known words contained
                    within the text. Outputted in the form of a text file placed
                    in the “Output Directory”.
                  </li>
                  <li>
                    <strong>Frequency List</strong>: outputs a frequency list
                    that can be used as your
                    <nuxt-link class="link3" to="#frequency"
                      >frequency.txt</nuxt-link
                    >. Outputted in the form of a text file placed in the
                    “Output Directory”.
                  </li>
                </ul>
                <p>
                  By default, the Readability Analyzer will be set up for
                  Japanese. To use it with another language, you need to change
                  the “default morphemizer” (or default parsing dictionary) in
                  <nuxt-link class="link3" to="#default-morphemizer"
                    >line 34 of config.py</nuxt-link
                  >.
                </p>
                <p>
                  In order to use the Readability Analyzer, first select your
                  “Input Directory”. The Readability Analyzer will analyze all
                  files contained within the folder you specify as your input
                  directory. You can have it analyze a single file, or multiple
                  files at once. It supports .txt, .ass, and .srt files encoded
                  in UTF-8. This means you can easily analyze the subtitle files
                  for a show, which can be very useful. Then load up your
                  known.db (which should be done automatically) and select where
                  you want the results outputted, and press “Analyze!”.
                </p>
                <p>
                  If you load a “Master Frequency List” (formatted in the same
                  format as the “Word Report), when generating a “Target Study
                  Plan” and “Frequency List”, results from the files in the
                  “Input Directory” will be combined with the Master List. For
                  the “Target Study Plan”, adding a master list will change the
                  order that the words are listed in and which words are left
                  off the list; the words that appear in the list will come
                  solely from the “Input Directory”. Using a “Master Frequency
                  List” is entirely optional.
                </p>
                <h2 id="config">config.py</h2>
                <p>
                  I said in the introduction to this post that MorphMan has
                  passed through the hands of multiple programmers, and due to
                  this is a bit of a mess. The configuration file,
                  <em>config.py</em>, is where this becomes the most apparent.
                </p>
                <p>
                  In the early versions of MorphMan, there was no “Preferences”
                  module inside of Anki. Instead, there was a configuration file
                  inside the add-on’s directory, which you had to open in a text
                  editor and use code to configure manually. Later down the line
                  of development, the “Preferences” module was added into Anki’s
                  interface, making it much easier for to get MorphMan setup.
                  The problem is that this “Preferences” module didn’t
                  completely replace the configuration file. MorphMan still
                  comes with a configuration file inside the add-on’s directory,
                  and there are certain settings that can only be modified by
                  manually editing this file.
                </p>
                <p>
                  Recall that, originally, the configuration file was used to
                  control <em>all</em> of MorphMan’s settings. Which
                  decks/note-types/fields you want MorphMan to look through,
                  what tags you want MorphMan to add, etc., was all configured
                  through this file. Even though that <em>most</em> of these
                  settings are now controlled with Preferences inside of Anki,
                  when you open up the configuration file, the old options to
                  edit these things are still there. This means that a portion
                  of the options you will find in the configuration file are
                  completely obsolete in the current version of MorphMan.
                  Changing them won’t have any effect; they will simply be
                  overwritten by whatever is specified in Preferences.
                </p>
                <h3 id="configedit">Editing config.py</h3>
                <p>
                  If you are using Anki 2.1, config.py can be found in
                  <code>
                    C:\Users\[user]\AppData\Roaming\Anki2\addons21\900801631\morph\config.py</code
                  >. In Anki 2.0, it can be found in
                  <code>
                    Anki 2.0:
                    C:\Users\[user]\AppData\Roaming\Anki2\addons\morph\config.py</code
                  >.
                </p>
                <p>
                  If you mess up your config.py and need to start fresh, you can
                  find a copy of the default settings
                  <nuxt-link
                    class="link3"
                    to="https://raw.githubusercontent.com/landonepps/MorphMan21/master/morph/config.py"
                    rel="noopener"
                    >here</nuxt-link
                  >.
                </p>
                <p>
                  Code editors with like
                  <nuxt-link
                    class="link3"
                    to="https://notepad-plus-plus.org/"
                    rel="noopener"
                    >Notepad++</nuxt-link
                  >
                  or
                  <nuxt-link
                    class="link3"
                    to="https://www.sublimetext.com/"
                    rel="noopener"
                    >Sublime Text</nuxt-link
                  >
                  have
                  <nuxt-link
                    class="link3"
                    to="https://en.wikipedia.org/wiki/Syntax_highlighting"
                    rel="noopener"
                    >syntax highlighting</nuxt-link
                  >, which makes viewing and editing config.py much easier. But
                  ultimately any text editor will do.
                </p>
                <p>
                  <img
                    class="aligncenter wp-image-1949"
                    src="https://massimmersionapproach.com/imgs/config.py_.png"
                    alt=""
                    width="500"
                    height="220"
                    srcset="
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/02/config.py_.png         704w,
                      https://web.archive.org/web/20191217143747im_/https://massimmersionapproach.com/imgs/2019/02/config.py_-300x132.png 300w
                    "
                    sizes="(max-width: 500px) 100vw, 500px"
                  />
                </p>
                <p>
                  Once you open up config.py in your text editor of choice, here
                  is a list of the following options you can tinker with
                  (remember, some options are obsolete and don’t influence
                  MorphMan at all):
                </p>
                <ul>
                  <li id="configmature">
                    Line 24:
                    <nuxt-link class="link3" to="#mature">Mature</nuxt-link>
                    threshold. How many <em>days</em> a card’s interval must be
                    before the Morphs contained in the card are considered
                    “mature”.
                  </li>
                  <li id="configknown">
                    Line 25:
                    <nuxt-link class="link3" to="#known">Known</nuxt-link>
                    threshold. How many <em>seconds</em> has passed since a card
                    was initially seen before the Morphs contained in the card
                    are considered “known”. Once a card graduates from the
                    learning queue, its Morphs will be considered “known”
                    regardless of whether it has reached the threshold or not.
                    If left at the default value of “10 seconds,” there will be
                    no distinction between Seen and Known cards; all will be
                    considered Known.
                  </li>
                  <li id="configseen">
                    Line 26:
                    <nuxt-link class="link3" to="#seen">Seen</nuxt-link>
                    threshold. How many <em>seconds</em> has passed since a card
                    was initially seen before the Morphs contained in the card
                    are considered “seen”.
                  </li>
                  <li>
                    Line 27: Text file import maturity. Default interval given
                    to Morphs that are manually imported by the user via the
                    <nuxt-link class="link3" to="#external"
                      >external.db</nuxt-link
                    >
                    database.
                  </li>
                  <li>
                    Line 30: Ignore grammar position. If this is set to “True”,
                    words that can function as multiple parts of speech will all
                    be counted as the same Morph, regardless of what part of
                    speech they are being used as. By default, words that can
                    function as multiple parts of speech are counted as a unique
                    Morph for each part of speech they are being used as.
                    Because of this, setting this option to “True” will reduce
                    the total number of known Morphs. Delete
                    <nuxt-link class="link3" to="#all.db">all.db</nuxt-link> and
                    run Recalc each time you change this setting.
                  </li>
                  <li id="default-morphemizer">
                    Line 34: Default morphemizer. Controls which parsing
                    dictionary the
                    <nuxt-link class="link3" to="#analyzer"
                      >Readability Analyzer</nuxt-link
                    >
                    uses. Set to “SpaceMorphemizer” for languages with spaces
                    between words, “CjkCharMorphemizer” for languages that use
                    CJK characters, and “JiebaMorphemizer” for Chinese.
                  </li>
                  <li>
                    Line 37: Set “<nuxt-link class="link3" to="#browse-morphs"
                      >Browse Morphs</nuxt-link
                    >” hotkey.
                  </li>
                  <li>
                    Line 38: Set “<nuxt-link class="link3" to="#already-known"
                      >Already Known Tagger</nuxt-link
                    >” hotkey.
                  </li>
                  <li>
                    Line 39: Set “<nuxt-link class="link3" to="#batchplay"
                      >Batch Play</nuxt-link
                    >” hotkey.
                  </li>
                  <li>
                    Line 40: Set “<nuxt-link class="link3" to="#extract"
                      >Extract Morphemes</nuxt-link
                    >” hotkey.
                  </li>
                  <li>
                    Line 41: Set “<nuxt-link class="link3" to="#learn-now"
                      >Learn Now</nuxt-link
                    >” hotkey.
                  </li>
                  <li>
                    Line 42: Set “<nuxt-link class="link3" to="#mass-tagger"
                      >Mass Tagger</nuxt-link
                    >” hotkey.
                  </li>
                  <li>
                    Line 43: Set “<nuxt-link class="link3" to="#view"
                      >View Morphemes</nuxt-link
                    >” hotkey.
                  </li>
                  <li>
                    Line 45: Print number of alternatives skipped. If “Skip card
                    if focus morph was already seen today” is checked off in
                    “MorphMan Preferences” &gt; “General,” MorphMan will
                    continue to reorder the New Card Queue while you rep to
                    ensure that you only see cards that are 1T. If “Print number
                    of alternatives skipped” is set to “True,” whenever this
                    reordering happens while you are reviewing, a
                    <nuxt-link class="link3" to="#skip"
                      >small notification box</nuxt-link
                    >
                    will briefly appear. If set to “False,” the reordering will
                    still happen, but this notification box will not appear.
                  </li>
                  <li>
                    Line 50: LoadAllDb. If this is set to “False”,
                    <nuxt-link class="link3" to="#all.db">all.db</nuxt-link>
                    will be generate from scratch each time Recalc is run. This
                    will make running Recalc take much longer.
                  </li>
                  <li id="configbatchmedia">
                    Line 65: Batch media fields. By specifying the fields that
                    contain audio on your cards, you can enable the
                    <nuxt-link class="link3" to="#batchplay"
                      >Batch Play</nuxt-link
                    >
                    option in the browser.
                  </li>
                  <li id="configmin">
                    Line 68: Min good sentence length. The minimum number of
                    Morphs for a sentence to not be considered “too short”.
                    Cards with sentences considered “too short” will receive a
                    lower
                    <nuxt-link class="link3" to="#mmi">MorphMan Index</nuxt-link
                    >. For Japanese, a “5” may be a good minimum.
                  </li>
                  <li id="configmax">
                    Line 69: Max good sentence length. The maximum number of
                    Morphs for a sentence to not be considered “too long”. Cards
                    with sentences considered “too long” will receive a lower
                    <nuxt-link class="link3" to="#mmi"
                      >Morph Man Index</nuxt-link
                    >. For Japanese, a “15” may be a good maximum.&nbsp;
                  </li>
                  <li>
                    Line 70: Reinforce new vocab weight. When a card contains
                    unmature Morphs, the amount specified here will be divided
                    by the interval of the most mature card containing that
                    Morph, and that amount will be subtracted from the
                    <nuxt-link class="link3" to="#mmi"
                      >MorphMan Index</nuxt-link
                    >
                    of that card.
                  </li>
                  <li>
                    Line 71: Verb bonus. The amount specified here will be
                    subtracted from the
                    <nuxt-link class="link3" to="#mmi"
                      >MorphMan Index</nuxt-link
                    >
                    of cards that contain an unknown verb. The idea is that
                    verbs tend to be more useful to learn than other parts of
                    speech.
                  </li>
                  <li id="configpriority">
                    Line 74: Priority.db weight. The amount specified here will
                    be subtracted from the
                    <nuxt-link class="link3" to="#mmi"
                      >MorphMan Index</nuxt-link
                    >
                    of cards that contain an unknown Morph that appears in the
                    <nuxt-link class="link3" to="#priority"
                      >priority.db</nuxt-link
                    >
                    database.
                  </li>
                  <li>
                    Line 79: Frequency weight. For cards with Morphs contained
                    within
                    <nuxt-link class="link3" to="#frequency"
                      >frequency.txt</nuxt-link
                    >, the amount specified here will be multiplied by the
                    “total number of words in frequency.txt” minus “Morph’s
                    position in frequency.txt”, and that amount will be
                    subtracted from the
                    <nuxt-link class="link3" to="#mmi"
                      >MorphMan Index</nuxt-link
                    >
                    of the card.
                  </li>
                  <li>
                    Line 82: Only update k+2 and below. If this option is set to
                    “True,” cards that contain <em>more</em> than two unknown
                    morphs won’t be sorted by MorphMan. This reduces how many
                    notes are changed after a Recalc by not updating notes that
                    aren’t as important, in return reducing the sync burden.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YouTubeEmbed from '~/components/YouTubeEmbed'

export default {
  transition: 'page',
  components: {
    YouTubeEmbed
  }
}
</script>

<style lang="scss" scoped>
.article-container {
  margin: 25px auto;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.article-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
img {
  height: auto;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  clear: both;
}
@media screen and (max-width: 600px) {
  .article-container {
    width: 80%;
  }
  .article-content img {
    max-width: 400px;
  }
}
</style>
