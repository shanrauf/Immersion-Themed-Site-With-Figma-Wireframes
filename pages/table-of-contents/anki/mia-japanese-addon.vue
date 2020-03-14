<template>
  <!-- <div>
    <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
    <nuxt-link to="/table-of-contents/Anki/">Anki</nuxt-link>
    <h1>MIA Japanese Addon Guide</h1>

  <h2>Intro</h2>

  Installation

  How It Works
  </!-->

  <div class="elementor-column-wrap  elementor-element-populated">
    <div class="elementor-widget-wrap">
      <div
        data-id="2c2682ff"
        class="elementor-element elementor-element-2c2682ff elementor-widget elementor-widget-text-editor"
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
                  <nuxt-link class="linkx" to="#installation"
                    >Installation</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link class="linkx" to="#how-it-works"
                    >How It Works</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link class="linkx" to="#coloring"
                    >Pitch Accent Coloring</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link class="linkx" to="#mia-japanese-note-type"
                    >“MIA Japanese” Note Type</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link class="linkx" to="#generation"
                    >Generating Readings, Pitch Accent, and Audio</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link class="linkx" to="#mass-generation"
                    >Mass Generation</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link class="linkx" to="#syntax">The Syntax</nuxt-link>
                </li>
                <li>
                  <nuxt-link class="linkx" to="#settings">Settings</nuxt-link>
                </li>
                <li>
                  <nuxt-link class="linkx" to="#qa">Q&amp;A</nuxt-link>
                </li>
                <li>
                  <nuxt-link class="linkx" to="#js-support"
                    >MIA Japanese and Japanese Support</nuxt-link
                  >
                </li>
              </ul>
            </div>
            <h1 id="intro">Intro</h1>
            <p>
              MIA Japanese is an Anki 2.1 add-on that provides a variety of
              features for improving the ease and efficiency of Japanese study,
              some of the most notable being
              <strong
                >automatic generation of native audio, kanji readings, and pitch
                accent information</strong
              >, as well as <strong>automatic pitch accent coloring</strong>.
              It’s extremely flexible and customizable, but also comes ready to
              use out of the box.&nbsp; The add-on largely works through
              JavaScript, which allows
              <strong
                >all of the core features to function on every platform,
                including AnkiWeb, Anki Mobile, and AnkiDroid</strong
              >.
            </p>
            <p>
              MIA Japanese does not conflict with the
              <nuxt-link class="link3" to="#js-support"
                >Japanese Support</nuxt-link
              >
              add-on and is fully compatible with MorphMan.
              <strong>The add-on is only compatible with Anki 2.1.</strong>
              Please make sure you’re using the newest version of Anki 2.1
              before installing.
            </p>
            <p>
              You can download the add-on
              <nuxt-link
                class="link3"
                to="https://ankiweb.net/shared/info/278530045"
                rel="noopener"
                >here</nuxt-link
              >.
            </p>
            <h1 id="installation">Installation</h1>
            <p>
              First, go to MIA Japanese’s add-on page (link above), and install
              it the same way you would any other add-on.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2921"
                src="~/assets/mia-japanese-addon/install1.gif"
                alt=""
                width="600"
                height="442"
              />
            </p>
            <p>
              <img
                class="aligncenter wp-image-3515"
                src="~/assets/mia-japanese-addon/install3.gif"
                alt=""
                width="600"
                height="420"
              />
            </p>
            <p>
              Once the add-on finishes downloading, close Anki. Then, go back to
              MIA Japanese’s add-on page and download the audio file pack
              (accentAudio.zip). Once it finishes downloading, extract its
              contents into the “user_files” folder, inside of MIA Japanese’s
              root add-on folder.
            </p>
            <p>
              On Windows, this should be the following directory:
              <code
                >C:\Users\[<em>user</em>]\AppData\Roaming\Anki2\addons21\278530045\user_files</code
              >.
            </p>
            <p>
              If you’re on a Mac, please use
              <nuxt-link
                class="link3"
                to="https://theunarchiver.com/"
                rel="noopener"
                >this software</nuxt-link
              >
              to unzip the “accentAudio” folder in order to avoid encoding
              issues and unplayable audio files.
            </p>
            <h1>
              <img
                class="aligncenter wp-image-2924"
                src="~/assets/mia-japanese-addon/install4.gif"
                alt=""
                width="600"
                height="434"
              />
            </h1>
            <p>
              <img
                class="aligncenter wp-image-3411"
                src="~/assets/mia-japanese-addon/install2-7.gif"
                alt=""
                width="600"
                height="400"
              />
            </p>
            <p>
              Once the folder containing the audio files finishes transferring,
              you should be all good to go.
            </p>
            <h1 id="how-it-works">How It Works</h1>
            <p>
              <img
                class="aligncenter wp-image-3517"
                src="~/assets/mia-japanese-addon/mia-japanese-generate-and-display3.gif"
                alt=""
                width="650"
                height="423"
              />
            </p>
            <p>
              As you can see in the image above, MIA Japanese generates reading
              and pitch accent information directly into the fields of your
              cards. This information is stored in the form of a simple syntax
              involving brackets. When viewing a card, JavaScript code that has
              been inserted directly into the note type template converts this
              syntax into furigana, pitch accent coloring, and pop-up pitch
              graphs.
            </p>
            <p>
              The add-on comes with the “MIA Japanese” note type, which already
              contains this JavaScript code. This way, you can use the add-on
              right out of the box, without having to set anything up. The
              add-on also allows you to insert JavaScript code into your
              existing note types, as well as customize exactly how the code
              functions.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2873"
                src="~/assets/mia-japanese-addon/mia-japanese-syntax2.gif"
                alt=""
                width="600"
                height="352"
              />
            </p>
            <p>
              The benefit of this system is that users can use this syntax to
              quickly and easily add or modify reading and pitch information,
              and any changes will be instantly reflected on their cards.
              Additionally, because the JavaScript code that renders the syntax
              is inserted directly into the note type template, the syntax
              functions equally across all platforms, including AnkiWeb, Anki
              Mobile and AnkiDroid.
            </p>
            <h1 id="coloring">Pitch Accent Coloring</h1>
            <p>
              Pitch Accent is a fundamental component of Japanese phonology. If
              you’re new to pitch accent,
              <nuxt-link
                class="link3"
                to="https://youtu.be/31d0b_swAAk"
                rel="noopener"
                >this video</nuxt-link
              >
              and
              <nuxt-link
                class="link3"
                to="https://youtu.be/75gkm9i_wBc"
                rel="noopener"
                >this video</nuxt-link
              >
              should serve as a good introduction.
            </p>
            <p>
              Because humans have extremely strong visual memories, color coding
              words in terms of their pitch accent pattern can make memorizing
              the pitch accents of individual words nearly effortless. For
              example, if a word is colored blue every time you see it in Anki,
              that word will likely become associated with the color blue in
              your head. Once this happens, when you recall the word, it may
              appear blue in your mind’s eye. If you know that “blue” means a
              word is pronounced with the “heiban” pitch accent pattern, then
              this association would be enough for you to remember the pitch
              accent of the word.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2901"
                src="~/assets/mia-japanese-addon/mia-japanese-color-coding2.gif"
                alt=""
                width="700"
                height="244"
              />
            </p>
            <p>
              MIA Japanese makes taking advantage of the power of pitch accent
              coloring easy. It allows you to generate pitch accent information
              for entire sentences with the press of a button, and automatically
              color code words in accordance with this pitch accent information.
              If you manually edit the pitch accent information of a word, the
              color of the word will automatically change to reflect that.
            </p>
            <p>
              You can customize the color scheme used to represent the different
              pitch accent patterns in the add-on’s
              <nuxt-link class="link3" to="#settings">settings</nuxt-link>. If
              you change the color associated with a given pitch accent pattern,
              all the cards in your collection will automatically change to
              reflect that.
            </p>
            <p>
              The following videos explain the theoretical underpins of how
              pitch accent is represented in the add-on. If you’re interested in
              studying pitch accent, we highly recommend watching them.
            </p>
          </div>
        </div>
      </div>
      <YouTubeEmbed src="https://youtube.com/embed/hWHvLvLs2KQ" />
      <div
        data-id="b2dd43f"
        class="elementor-element elementor-element-b2dd43f elementor-widget elementor-widget-text-editor"
        data-element_type="text-editor.default"
      >
        <div class="elementor-widget-container">
          <div class="elementor-text-editor elementor-clearfix">
            <p>
              <strong>Note:</strong> there are actually two possible pitch
              accent patterns for i-adjectives in the “～くて” form: [-3] (as
              shown in the video: みじか↓くて), and [-4] (みじ↓かくて). These
              two patterns are mostly used interchangeably. Two mora words like
              “よい”, which will only have three morae in the “～くて” form,
              obviously can only be pronounced with the [-3] pattern (よ↓くて).
            </p>
          </div>
        </div>
      </div>
      <YouTubeEmbed src="https://youtube.com/embed/cxxNcKXsmH0" />

      <div
        data-id="b292f70"
        class="elementor-element elementor-element-b292f70 elementor-widget elementor-widget-text-editor"
        data-element_type="text-editor.default"
      >
        <div class="elementor-widget-container">
          <div class="elementor-text-editor elementor-clearfix">
            <p>
              <strong>Note:</strong> the pitch of “入（はい）る” is actually
              [-3], not [-2], due to a higher-level pitch accent concept known
              as 特殊泊, or “special morae”. “特殊泊” are “weak” morae that
              generally cannot become the accent-core of a word. They include
              ん, っ, the second half of extended vowels (such as the “あ” in
              “かあ”), and the second half of double-vowels (such as the “い” in
              かい).
            </p>
            <p>
              When the accent of a word <em>would have</em> fallen on a 特殊泊,
              it gets bumped up to the previous mora instead. Because the
              second-to-last mora of “入る” is the second half of a
              double-vowel, its accent-core gets bumped up to “は”. This doesn’t
              have any influence on its conjugation; it conjugates as a normal
              non-heiban verb.
            </p>
            <h1 id="mia-japanese-note-type">“MIA Japanese” Note Type</h1>
            <p>
              <img
                class="aligncenter size-medium wp-image-2814"
                src="~/assets/mia-japanese-addon/mia-japanese-note-type-300x238.png"
                alt=""
                width="300"
                height="238"
              />
            </p>
            <p>
              When you install MIA Japanese, it will automatically add the “MIA
              Japanese” note type to your collection.
            </p>
            <p>
              If you want to permanently remove the “MIA Japanese” note type,
              uncheck “Add MIA Japanese Note Type” in the “<nuxt-link
                class="link3"
                to="#active-fields"
                >Active Fields</nuxt-link
              >” tab of the add-on’s settings before deleting the note type. If
              you delete the “MIA Japanese” note type without unchecking “Add
              MIA Japanese Note Type”, the add-on will automatically re-generate
              it next time you open Anki.
            </p>
            <p>
              The “MIA Japanese” note type was designed for
              <nuxt-link
                class="link3"
                to="https://massimmersionapproach.com/table-of-contents/stage-1/jp-quickstart-guide#sentence-cards"
                rel="noopener"
                >sentence cards</nuxt-link
              >.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2816"
                src="~/assets/mia-japanese-addon/mia-japanese-note-type3-768x577.png"
                alt=""
                width="600"
                height="451"
              />
            </p>
            <p>The target sentence goes in the “Expression” field.</p>
            <p>
              Whatever you need to understand the sentence goes in the “Meaning”
              field.
            </p>
            <p>
              Audio for the target sentence and/or target word goes in the
              “Audio” field.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2818"
                src="~/assets/mia-japanese-addon/mia-japanese-audio-on-front2.gif"
                alt=""
                width="700"
                height="326"
              />
            </p>
            <p>
              The “Audio on Front” field is a conditional field. If the field is
              left completely empty, a text-based sentence card will be
              generated (“Expression” field on the front, and “Meaning” and
              “Audio” fields on the back). If the “Audio on Front” field is
              filled, an audio-based sentence card will be created (“Audio”
              field on the front, “Expression” and “Meaning” fields on the
              back). By filling and emptying the “Audio on Front” field, you can
              convert a card between audio-based and text-based at any time.
            </p>
            <p>
              If you generate readings and pitch accents in the Expression
              field, on the front of the card, text will appear without furigana
              or pitch accent coloring. If you hover over a word, furigana and
              pitch accent coloring for that word will appear. On the back of
              the card, text will appear with furigana and pitch accent coloring
              by default.
            </p>
            <p>
              If you generate readings and pitch accents in the Meaning field,
              on the back of the card, the text will appear without furigana or
              pitch accent coloring. If you hover over a word, furigana and
              pitch accent coloring for that word will appear.
            </p>
            <p>
              Additionally, for both the Expression and Meaning fields, when you
              hover over a word, a pop-up will appear with the reading and pitch
              accent information. You can turn off these pop-up pitch graphs in
              the
              <nuxt-link class="link3" to="#settings">settings</nuxt-link>.
            </p>
            <p>
              <strong>These features will work on all platforms</strong>,
              including AnkiWeb, Anki Mobile, or AnkiDroid.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2855"
                src="~/assets/mia-japanese-addon/mia-japanese-click.gif"
                alt=""
                width="400"
                height="282"
              />
            </p>
            <p>
              If you’re on a desktop, you can click on any word that’s been
              generated to listen to native audio for that word. This feature
              relies on the audio files contained in the add-on’s folder and
              thus doesn’t work on other platforms. This doesn’t actually add
              audio files to your cards, and won’t increase the size of your
              media folder.
            </p>
            <h1 id="generation">
              Generating Readings, Pitch Accent, and Audio
            </h1>
            <p>
              <img
                class="aligncenter size-full wp-image-2829"
                src="~/assets/mia-japanese-addon/mia-japanese-4-buttons2-1.png"
                alt=""
                width="416"
                height="50"
              />
            </p>
            <p>
              Once MIA Japanese is installed, the four buttons shown above
              should appear in the browser and add window.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2825"
                src="~/assets/mia-japanese-addon/mia-japanese-sentence-button3.gif"
                alt=""
                width="600"
                height="324"
              />
            </p>
            <p>
              The first of these, “文(ぶん)”, is the <em>sentence</em> button
              (hotkey: F2). By default, it generates readings and pitch accents
              for all of the words in the selected field. What the sentence
              button does can be customized in the add-on’s
              <nuxt-link class="link3" to="#settings">settings</nuxt-link>.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2826"
                src="~/assets/mia-japanese-addon/mia-japanese-word-button.gif"
                alt=""
                width="600"
                height="325"
              />
            </p>
            <p>
              The second button, “語(ご)”, is the <em>word</em> button (hotkey:
              F3). By default, it generates native audio and a pitch accent
              graph for the selected word.
            </p>
            <p>
              The audio and pitch accent graph will be placed in the
              <em>audio field(s)</em> and <em>pitch graph</em>
              <em>field(s)</em> respectively. You can change which fields are
              <em>audio fields</em> and <em>pitch graphs fields</em> in the
              add-on’s
              <nuxt-link class="link3" to="#settings">settings</nuxt-link>.
            </p>
            <p>
              What the word button does can also be customized in the add-on’s
              <nuxt-link class="link3" to="#settings">settings</nuxt-link>.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2830"
                src="~/assets/mia-japanese-addon/mia-japanese-select-word.gif"
                alt=""
                width="600"
                height="284"
              />
            </p>
            <p>
              There are two ways to select a word. The first is to simply place
              your cursor directly in front of the word. The second is to
              highlight the word. Highlighting allows for more precision.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2835"
                src="~/assets/mia-japanese-addon/mia-japanese-select-word4.gif"
                alt=""
                width="600"
                height="260"
              />
            </p>
            <p>
              If the selected word is in a conjugated form, the add-on will
              automatically find the dictionary form of the word.
            </p>
            <p>
              <img
                class="aligncenter wp-image-3090"
                src="~/assets/mia-japanese-addon/mia-japanese-alternate-audio.gif"
                alt=""
                width="600"
                height="250"
              />
            </p>
            <p>
              In Japanese, sometimes words with different readings share the
              same kanji. If the add-on generates audio for the wrong word, you
              can correct this by typing “a” (for <strong>a</strong>lternate)
              and then the reading of the correct word, and pressing the word
              button again.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2838"
                src="~/assets/mia-japanese-addon/mia-japanese-saku-button.gif"
                alt=""
                width="600"
                height="390"
              />
            </p>
            <p>
              The third button, “削(さく)”, is the <em>removal</em> button
              (hotkey: F4). It removes readings and pitch accents from the
              selected field.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2912"
                src="~/assets/mia-japanese-addon/mia-japanese-highlight-removal2.gif"
                alt=""
                width="600"
                height="313"
              />
            </p>
            <p>
              You can also remove specific portions of readings and pitch
              accents from a field by highlighting that portion before pressing
              the removal button.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2860"
                src="~/assets/mia-japanese-addon/mia-japanese-r2.gif"
                alt=""
                width="600"
                height="305"
              />
            </p>
            <p>
              The fourth button, “R+”, is the
              <em>add new overwrite rule</em> button (hotkey: F5). The overwrite
              rule feature allows you to make changes to the way the add-on
              generates readings and pitch accents.
            </p>
            <p>
              The add-on is not perfect, and will occasionally generate
              incorrect readings and pitch accents for words. When you notice
              that the add-on makes a consistent error, by creating an overwrite
              rule, you can prevent the add-on from repeating that mistake in
              the future. You can also use this feature to add entirely new
              words to the add-on’s dictionary.
            </p>
            <p>
              You can edit and remove overwrite rules in the add-on’s
              <nuxt-link class="link3" to="#settings">settings</nuxt-link>.
            </p>
            <h1 id="mass-generation">Mass Generation</h1>
            <p>
              <img
                class="aligncenter wp-image-3416"
                src="~/assets/mia-japanese-addon/mia-japanese-mass-gen3.gif"
                alt=""
                width="800"
                height="470"
              />
            </p>
            <p>
              You can generate readings, pitch accents, and audio for multiple
              cards at once using the mass generation feature. To use this
              feature, first, go to the browser and select all the cards you
              want to generate readings/accents/audio for. Then, go to Edit &gt;
              Generate Readings/Accents/Audio.
            </p>
            <p>
              Next, select which field and what information you want to
              generate. “Origin” is the field that is being generated for, and
              “Destination” is the field where the add-on will output the
              generated text. By making the “Origin” field and “Destination”
              field different, you can have the add-on leave the original text
              untouched, and generate into a separate field.
            </p>
            <p>
              If you select “Audio” and/or “Graphs”, native audio and pitch
              accent graphs will be generated for every word in the “Origin”
              field.
            </p>
            <p>
              The “Overwrite?” drop-down allows you to choose how the add-on
              outputs the generated text. On “Add”, the add-on will place the
              generated text beneath whatever text is already in the
              “Destination” field. On “Overwrite”, the add-on will replace
              whatever text is already in the “Destination” field with the newly
              generated text. On “If Empty”, the add-on will only output the
              generated text if the “Destination” field is empty.
            </p>
            <p>
              <strong
                >In order to have the mass generation feature function the same
                as the sentence button, set “Origin” and “Destination” to the
                same field, and set “Overwrite?” to “Replace”.</strong
              >
            </p>
            <p>
              Alternatively, you can also use the “Remove Readings” option to
              remove readings and pitch accents from multiple cards at once.
              When using the “Remove Readings” option, readings and pitch
              accents will be removed from the “Origin” field.
            </p>
            <p>
              Similarly, the “Remove HTML” option will strip away any HTML tags
              from the “Origin” field of the selected cards.
            </p>
            <h1 id="syntax">The Syntax</h1>
            <p>The syntax the add-on uses is as follows.</p>
            <p>
              Each word is separated by a single space. For each word, reading
              and accent information is contained within brackets (“[ ]”). These
              brackets are placed directly after the last kanji used in the
              word. If the word doesn’t contain any kanji, the brackets are
              placed at the very end of the word.
            </p>
            <p>
              <img
                class="aligncenter wp-image-3031"
                src="~/assets/mia-japanese-addon/mia-japanese-syntax-show12-768x255.png"
                alt=""
                width="650"
                height="216"
              />
            </p>
            <p>
              Within the brackets, reading information and pitch accent
              information are separated by a semicolon. Reading information goes
              before the semicolon, and pitch accent information goes after the
              semicolon.
            </p>
            <p>
              <img
                class="aligncenter wp-image-2880"
                src="~/assets/mia-japanese-addon/mia-japanese-syntax-example1-768x324.png"
                alt=""
                width="600"
                height="253"
              />
            </p>
            <p>
              The reading portion of the brackets is further divided into two
              segments: the kana reading of the portion of the word in front of
              the brackets, and the kana reading of the dictionary form of the
              word. These two segments are separated by a comma. The portion of
              the word in front of the brackets goes before the comma, and the
              dictionary form goes after the comma.
            </p>
            <p>
              <strong
                >The dictionary form is only used for adjectives and
                verbs</strong
              >. It’s needed to provide the pop-up pitch graph, which shows the
              pitch accent of the word in dictionary form. If the word isn’t a
              verb or adjective, the reading portion of the brackets will only
              contain the kana reading of the portion of the word in front of
              the brackets, with no comma. If the word doesn’t contain any
              kanji, the reading portion of the brackets will be left empty.
            </p>
            <p>
              Within the pitch accent portion of the brackets, the following
              letters are used to designate the pitch accent pattern of the
              word:
            </p>
            <ul>
              <li>
                h: <span style="color: #005ce6;">平板(へいばん)/Heiban</span>
              </li>
              <li>
                a:
                <span style="color: #e60000;">頭高(あたまだか)/Atamadaka</span>
              </li>
              <li>
                n: <span style="color: #e68a00;">中高(なかだか)/Nakadaka</span>
              </li>
              <li>
                o: <span style="color: #00802b;">尾高(おだか)/Odaka</span>
              </li>
              <li>
                k: <span style="color: #ac00e6;">起伏(きふく)/Kifuku</span>
              </li>
            </ul>
            <p>
              If you’re unfamiliar with the “kifuku” pitch accent pattern, check
              out the video “Thinking About Word-Level Pitch Accent”, which is
              linked in the
              <nuxt-link class="link3" to="#coloring"
                >Pitch Accent Coloring</nuxt-link
              >
              section.
            </p>
            <p>
              Unlike the other three pitch-patterns, knowing that a word is
              “nakadaka” or “kifuku” often isn’t enough to know exactly where
              the accent drop is. Because of this, in order to ensure that the
              pop-up pitch graph can show the precise location of the accent
              drop, for nakadaka and kifuku words, the pitch accent number is
              included after the “n” or “k”.
            </p>
            <p>
              For heiban, atamadaka, and odaka words, the pitch accent is not
              ambiguous, and thus there is no need to specify the exact location
              of the drop.
            </p>
            <h2 id="spaces">Spaces</h2>
            <p>
              As stated above, spaces are used to mark word boundaries within
              the syntax. When the syntax is rendered, these spaces are not
              displayed. This means that, by default, languages that are usually
              written with spaces, such as English, will also be displayed
              without spaces.
            </p>
            <p>
              <img
                class="aligncenter wp-image-3464"
                src="~/assets/mia-japanese-addon/mia-japanese-spaces.gif"
                alt=""
                width="600"
                height="207"
              />
            </p>
            <p>
              In order to counteract this problem, when syntax is generated via
              the sentence button, any pre-existing spaces are replaced with a
              slightly different space character, which isn’t removed when the
              syntax is rendered.
            </p>
            <p>
              So, after placing English inside of an active field, make sure to
              generate (or re-generate) syntax via the sentence button to ensure
              that everything is displayed properly.
            </p>
            <h2>Other Pitch Phenomena</h2>
            <p>
              <img
                class="aligncenter wp-image-2881"
                src="~/assets/mia-japanese-addon/mia-japanese-syntax-h.gif"
                alt=""
                width="600"
                height="247"
              />
            </p>
            <p>
              When a word has multiple possible pitch accents, each accent is
              separated by a comma. Accents are listed in order of dominance,
              and the first accent will determine the color of the word.
            </p>
            <p>
              Depending on the display type, the alternate accents will be
              displayed as colored diamonds following the word. The color of the
              diamonds represents what that alternate accents are. This way,
              color coding can be used to remember the alternate accents of
              words in addition to the dominant accent.
            </p>
            <p>
              <img
                class="aligncenter wp-image-3113"
                src="~/assets/mia-japanese-addon/mia-japanese-compound3.gif"
                alt=""
                width="600"
                height="233"
              />
            </p>
            <p>
              When a single word is comprised of multiple accent phrases, once
              generated, it will appear like in the picture above. To understand
              why this is and what to do about it, watch from 17:52 in the
              <nuxt-link class="link3" to="#qa">Q&amp;A video</nuxt-link>
              and read the notes below.
            </p>
            <h2 id="browser">In The Browser</h2>
            <p>
              Once you generate readings and pitch accents in a field, that
              reading and accent information will get in the way of easily
              searching for the contents of that field in the browser.
            </p>
            <p>
              For example, after generating readings and pitch accents for
              “日本語学習”, it will appear as “日本語[にほんご;h]
              学習[がくしゅう;h]” in the field of the card. Because of this, if
              you searched “日本語学習” in the search bar at the top of the
              browser, it would no longer show up.
            </p>
            <p>
              <img
                class="aligncenter wp-image-3181"
                src="~/assets/mia-japanese-addon/mia-japanese-nobr.gif"
                alt=""
                width="700"
                height="613"
              />
            </p>
            <p>
              You can get around this by adding “nobr” (for “no brackets”) to
              your search. When the letters “nobr” exist anywhere in the search
              bar, Anki will ignore spaces, brackets, and the contents of
              brackets while searching.
            </p>
            <h1 id="settings">Settings</h1>
            <p>
              <img
                class="aligncenter wp-image-3521"
                src="~/assets/mia-japanese-addon/mia-jp-settings.png"
                alt=""
                width="400"
                height="164"
              />
            </p>
            <p>
              To open the add-on’s settings, go to “MIA” on Anki’s menu bar and
              select “Japanese Settings”.
            </p>
            <p>
              The following video is a rough walkthrough of the add-on’s
              settings. Each option is explained in greater detail below.
            </p>
          </div>
        </div>
      </div>
      <YouTubeEmbed src="https://youtube.com/embed/4rsLHpEQUXU" />
      <div
        data-id="31a1bf4"
        class="elementor-element elementor-element-31a1bf4 elementor-widget elementor-widget-text-editor"
        data-element_type="text-editor.default"
      >
        <div class="elementor-widget-container">
          <div class="elementor-text-editor elementor-clearfix">
            <h2>Options</h2>
            <h3>
              <img
                class="aligncenter wp-image-3012"
                src="~/assets/mia-japanese-addon/mia-japanese-settings2.png"
                alt=""
                width="700"
                height="457"
              /><br />Profiles
            </h3>
            <p>
              <img
                class="aligncenter wp-image-3014"
                src="~/assets/mia-japanese-addon/mia-japanese-settings-profile.gif"
                alt=""
                width="350"
                height="187"
              />
            </p>
            <p>Select which profiles the add-on will be activated for.</p>
            <h3>Generation</h3>
            <h4>“Sentence Button (文)”</h4>
            <p>
              <img
                class="aligncenter wp-image-3044"
                src="~/assets/mia-japanese-addon/mia-japanese-settings-sentence2.png"
                alt=""
                width="500"
                height="81"
              />
            </p>
            <p>Customize the behavior of the sentence button:</p>
            <ul>
              <li>
                <em>Kana</em>: generate kana readings for every word in the
                selected field. On by default.
              </li>
              <li>
                <em>Dictionary Form</em>: generate the dictionary form for every
                verb and adjective in the selected field (used for pop-up pitch
                graphs). On by default.
              </li>
              <li>
                <em>Audio</em>: generate native audio for every word in the
                selected field. Audio is placed in the <em>audio field(s)</em>.
                Off by default.
              </li>
              <li>
                <em>Pitch Graph</em>: generate pitch accent graphs for every
                word in the selected field. Pitch graphs are placed in the
                <em>pitch graph field(s)</em>. Off by default.
              </li>
              <li>
                <em>Pitch Accent</em>: generate pitch accent information for
                every word in the selected field. On by default.
              </li>
            </ul>
            <h4>“Word Button (語)”</h4>
            <p>
              <img
                class="aligncenter wp-image-3045"
                src="~/assets/mia-japanese-addon/mia-japanese-settings-word.png"
                alt=""
                width="500"
                height="90"
              />
            </p>
            <p>Customize the behavior of the word button:</p>
            <ul>
              <li>
                <em>Kana</em>: generate the kana reading of the selected word.
                Off by default.
              </li>
              <li>
                <em>Dictionary Form</em>: generate the dictionary form of the
                selected word (only applies to verbs and adjectives; used for
                pop-up pitch graphs). Off by default.
              </li>
              <li>
                <em>Audio</em>: generate native audio for the selected word.
                Audio is placed in the <em>audio field(s)</em>. On by default.
              </li>
              <li>
                <em>Pitch Graph</em>: generate a pitch accent graph for the
                selected word. Pitch graphs are placed in the
                <em>pitch graph field(s)</em>. On by default.
              </li>
              <li>
                <em>Pitch Accent</em>: generate pitch accent information for the
                selected word. Off by default.
              </li>
            </ul>
            <h4>Audio Field(s)</h4>
            <p>
              <img
                class="aligncenter wp-image-3046"
                src="~/assets/mia-japanese-addon/mia-japanese-settings-AF.png"
                alt=""
                width="700"
                height="58"
                sizes="(max-width: 700px) 100vw, 700px"
              />
            </p>
            <p>Select which field(s) audio will be generated in.</p>
            <p>
              If <em>Overwrite</em> is selected, when audio is generated,
              whatever was previously in the <em>audio field(s)</em> will be
              replaced with the new audio.
            </p>
            <p>
              If <em>If Empty</em> is selected, audio will only be generated
              when the <em>audio field</em> is empty.
            </p>
            <p>
              If <em>Add with Separator</em> is selected, when audio is
              generated, if there is already something in the
              <em>audio field</em>, the new audio will be placed at the bottom
              of the field, after a separator. The default separator is a single
              line break (&lt;br&gt;).
            </p>
            <h4>Pitch Graph Field(s)</h4>
            <p>
              <img
                class="aligncenter wp-image-3047"
                src="~/assets/mia-japanese-addon/mia-japanese-settings-PGF.png"
                alt=""
                width="700"
                height="52"
              />
            </p>
            <p>Select which field(s) pitch graphs will be generated in.</p>
            <p>
              If <em>Overwrite</em> is selected, when a pitch graph is
              generated, whatever was previously in the
              <em>pitch graph field(s)</em> will be replaced with the new pitch
              graph.
            </p>
            <p>
              If <em>If Empty</em> is selected, pitch graphs will only be
              generated when the <em>pitch graph field</em> is empty.
            </p>
            <p>
              If <em>Add with Separator</em> is selected, when a pitch graph is
              generated, if there is already something in the
              <em>pitch graph field</em>, the new pitch graph will be placed at
              the bottom of the field, after a separator. The default separator
              is a single line break (&lt;br&gt;).
            </p>
            <h4>Look Ahead</h4>
            <p>
              When you press the word button while your cursor is in front of a
              word, the add-on will search its internal dictionary for the
              <em>longest</em> possible matching word. For example, the word
              “日本語” contains the word “日本” within it. If you place your
              cursor in front of “日本語” and press the word button, the add-on
              will select the word “日本語” rather than “日本”, because “日本語”
              is the longer of the two.
            </p>
            <p>
              <em>Look ahead</em> controls the maximum number of characters the
              add-on will search while looking for the longest possible match. A
              larger number will lead to more accurate results but a longer
              search time. Characters inside of brackets are included in the
              <em>look ahead</em> count.
            </p>
            <h3>Colors</h3>
            <p>
              <img
                class="aligncenter wp-image-3049"
                src="~/assets/mia-japanese-addon/mia-japanese-settings-colors2-768x71.png"
                alt=""
                width="700"
                height="65"
              />
            </p>
            <p>
              Select which colors are associated with each pitch accent pattern.
              Any changes made will be automatically reflected in all of your
              cards.
            </p>
            <h3>Behavior</h3>
            <p>
              <img
                class="aligncenter wp-image-3050"
                src="~/assets/mia-japanese-addon/mia-japanese-settings-behavior-768x80.png"
                alt=""
                width="700"
                height="73"
              />
            </p>
            <p>
              Various options related to how the JavaScript code inserted into
              your note type templates will render your cards.
            </p>
            <h4>Furigana Font Size</h4>
            <p>Controls the size of furigana on your cards.</p>
            <h4>Buffered Output</h4>
            <p>
              When <em>buffered output</em> is selected, the JavaScript on cards
              will be rendered in small chunks instead of all at once. This mode
              is for extremely slow computers or cards with huge amounts of
              text.
            </p>
            <h4>Historical Conversion</h4>
            <p>
              <img
                class="aligncenter wp-image-3106"
                src="~/assets/mia-japanese-addon/mia-japanese-historical-conversion2.gif"
                alt=""
                width="650"
                height="424"
              />
            </p>
            <p>
              When <em>historical conversion</em> is selected, kanji and kana
              will be converted into
              <nuxt-link
                class="link3"
                to="https://en.wikipedia.org/wiki/Ky%C5%ABjitai"
                rel="noopener"
                >pre-WWII kanji</nuxt-link
              >
              and
              <nuxt-link
                class="link3"
                to="https://en.wikipedia.org/wiki/Historical_kana_orthography"
                rel="noopener"
                >pre-WWII kana spelling</nuxt-link
              >
              respectively. The conversation is done in real-time through
              JavaScript and doesn’t influence the actual content of fields.
              This feature is supported on all platforms, including AnkiWeb,
              Anki Mobile, and AnkiDroid.
            </p>
            <p>
              Historical conversion only converts fields that have been added to
              the
              <nuxt-link class="link3" to="#active-fields" rel="noopener"
                >active fields table</nuxt-link
              >. If you want a field to be converted but don’t want furigana or
              pitch accent coloring, add the field to the active fields table
              with the “<nuxt-link class="link3" to="#kanji" rel="noopener"
                >kanji</nuxt-link
              >” display type.
            </p>
            <h4>Display Shapes</h4>
            <p>
              When <em>display shapes</em> is selected, alternate accents will
              be displayed as either colored diamonds or colored circles
              following the word.
            </p>
            <p>
              Diamonds represent standard alternate accents. The color of the
              diamonds represents what that alternate accents are.
            </p>
            <p>
              Circles represent alternate accents that are split into multiple
              accent phrases. To learn more about this, read the notes at the
              bottom of the
              <nuxt-link class="link3" to="#qa">Q&amp;A section</nuxt-link>.
            </p>
            <h4>Audio On Click</h4>
            <p>
              When <em>audio on click</em> is selected, if you’re on a desktop,
              you can click on any word that’s been generated to listen to
              native audio for that word. This feature relies on the audio files
              contained in the add-on’s folder and thus doesn’t work on other
              platforms. This doesn’t actually add audio files to your cards,
              and won’t increase the size of your media folder.
            </p>
            <h4>Graph On Hover</h4>
            <p>
              When&nbsp;<em>graph on hover&nbsp;</em>is selected, pop-up pitch
              graphs will appear whenever hovering over a word whose reading and
              pitch accent have been generated.
            </p>
            <h4>Katakana Conversion</h4>
            <p>
              <img
                class="aligncenter wp-image-3105"
                src="~/assets/mia-japanese-addon/mia-japanese-katakana-conversion3.gif"
                alt=""
                width="600"
                height="391"
              />
            </p>
            <p>
              When <em>katakana conversion</em> is selected, all kana will be
              converted into katakana. The conversation is done in real-time
              through JavaScript and doesn’t influence the actual content of
              fields. This feature is supported on all platforms, including
              AnkiWeb, Anki Mobile, and AnkiDroid.
            </p>
            <p>
              Katakana conversion only converts fields that have been added to
              the
              <nuxt-link class="link3" to="#active-fields" rel="noopener"
                >active fields table</nuxt-link
              >. If you want a field to be converted but don’t want furigana or
              pitch accent coloring, add the field to the active fields table
              with the “<nuxt-link class="link3" to="#kanji" rel="noopener"
                >kanji</nuxt-link
              >” display type.
            </p>
            <h2 id="active-fields">Active Fields</h2>
            <h2>
              <img
                class="aligncenter wp-image-3056"
                src="~/assets/mia-japanese-addon/mia-japanese-active-fields2.gif"
                alt=""
                width="700"
                height="457"
              />
            </h2>
            <p>
              The <em>active fields</em> tab allows you to insert custom
              JavaScript code into your original note type templates. You can
              activate this feature by selecting “Auto CSS &amp; JS Generation”.
            </p>
            <p>
              There are eight different display types you can choose from when
              deciding how you want the syntax in your fields to be rendered (as
              shown below). For each note type, for each field you want rendered
              according to a specific display type, add a row to the active
              fields table.
            </p>
            <p>
              <img
                class="aligncenter wp-image-3065"
                src="~/assets/mia-japanese-addon/mia-japanese-active-fields-demo.gif"
                alt=""
                width="700"
                height="457"
              />
            </p>
            <p>
              When you press “Apply” after making changes to the active fields
              table, the add-on will insert custom JavaScript code into your
              note type templates to reflect that change. Once you sync, those
              changes will be reflected on AnkiWeb, Anki Mobile, and AnkiDroid
              as well.
            </p>
            <p>
              As long as “Auto CSS &amp; JS Generation” is selected, the add-on
              will continually edit your note type templates to keep them in
              line with the active fields table. If “Auto CSS &amp; JS
              Generation” is not selected, the add-on won’t make any changes to
              your note type templates.
            </p>
            <p>
              When “Add MIA Japanese Note Type” is selected, the add-on will
              automatically generate the “MIA Japanese” note type each time you
              open Anki. If you manually make changes to the “MIA Japanese” note
              type, the add-on will not reverse those changes.
            </p>
            <h3>Display Types</h3>
            <p>
              <strong>Note:</strong> in order to more clearly demonstrate the
              different display types, pop-up pitch graphs have been turned off
              in the following pictures.
            </p>
            <p><strong id="kanji">Kanji:</strong></p>
            <p>
              <img
                class="aligncenter wp-image-3078"
                src="~/assets/mia-japanese-addon/display-type-kanji2.gif"
                alt=""
                width="600"
                height="252"
              />
            </p>
            <p><strong>Colored Kanji:</strong></p>
            <p>
              <img
                class="aligncenter wp-image-3079"
                src="~/assets/mia-japanese-addon/display-type-coloredkanji2.gif"
                alt=""
                width="600"
                height="253"
              />
            </p>
            <p><strong>Hover:</strong></p>
            <p>
              <img
                class="aligncenter wp-image-3080"
                src="~/assets/mia-japanese-addon/display-type-hover2.gif"
                alt=""
                width="600"
                height="253"
              />
            </p>
            <p><strong>Colored Hover:</strong></p>
            <p>
              <img
                class="aligncenter wp-image-3081"
                src="~/assets/mia-japanese-addon/display-type-coloredhover2.gif"
                alt=""
                width="600"
                height="252"
              />
            </p>
            <p><strong>Kanji Reading:</strong></p>
            <p>
              <img
                class="aligncenter wp-image-3082"
                src="~/assets/mia-japanese-addon/display-type-kanjireading2.gif"
                alt=""
                width="600"
                height="253"
              />
            </p>
            <p><strong>Colored Kanji Reading :</strong></p>
            <p>
              <img
                class="aligncenter wp-image-3083"
                src="~/assets/mia-japanese-addon/display-type-coloredkanjireading2.gif"
                alt=""
                width="600"
                height="253"
              />
            </p>
            <p><strong>Reading:</strong></p>
            <p>
              <img
                class="aligncenter wp-image-3084"
                src="~/assets/mia-japanese-addon/display-type-reading2.gif"
                alt=""
                width="600"
                height="252"
              />
            </p>
            <p><strong>Colored Reading:</strong></p>
            <p>
              <img
                class="aligncenter wp-image-3085"
                src="~/assets/mia-japanese-addon/display-type-coloredreading2.gif"
                alt=""
                width="600"
                height="252"
              />
            </p>
            <h2>Overwrite Rules</h2>
            <p>
              <img
                class="aligncenter wp-image-3068"
                src="~/assets/mia-japanese-addon/mia-japanese-overwrite-rules-demo.gif"
                alt=""
                width="700"
                height="457"
              />
              <br />The <em>overwrite rules</em> tab allows you to manage your
              overwrite rules.
            </p>
            <p>
              You can easily edit an existing rule by doubling clicking on it in
              the table. After editing a rule, you will be prompted with the
              option to apply that change to the existing cards in your
              collection.
            </p>
            <p>
              You can delete existing rules by highlighting them,
              right-clicking, and selecting “Delete Selected Rows”.
            </p>
            <p>
              Using the options on the right, you can also add new rules, apply
              all current rules to your collection, and import or export rule
              lists.
            </p>
            <h1 id="qa">Q&amp;A</h1>
          </div>
        </div>
      </div>
      <YouTubeEmbed src="https://youtube.com/embed/v0Ixd2IkYik" />
      <div
        data-id="56046b7"
        class="elementor-element elementor-element-56046b7 elementor-widget elementor-widget-text-editor"
        data-element_type="text-editor.default"
      >
        <div class="elementor-widget-container">
          <div class="elementor-text-editor elementor-clearfix">
            <p>
              <strong>Timestamps:</strong> <br />00:45 – Why particles aren’t
              assigned a pitch <br />04:28 – Why some common words aren’t
              assigned a pitch <br />06:39 – Removing redundancies <br />09:24 –
              Why suffixes aren’t assigned a pitch <br />11:27 – Why counters
              aren’t assigned a pitch <br />13:44 – Words with multiple possible
              accents <br />17:52 – Multi-accent phrase words
            </p>
            <h2>Some Other Notes</h2>
            <p>
              We will continue to improve the add-on’s pitch accent dictionary
              over time, but at the current moment, it’s still far from perfect.
              Some suffixes and counters have yet to be removed from the
              dictionary, and will be assigned false accents on generation. If
              this happens, simply manually remove the falsely assigned accent.
            </p>
            <p>
              In the video above, Matt said for multi-accent phrase words, the
              first <em>half</em> of the word has one accent, and the second
              <em>half </em>has another. But by “half”, what he really meant was
              “section”. When a word is broken up into multiple accent phrases,
              the break won’t necessarily be in the middle; it can occur
              anywhere in the word. This is why the add-on can’t automatically
              know where the break will be.
            </p>
            <p>
              Multi-accent phrase words are usually compound words, and you can
              often intuit where the break is based on the component words.
              Sometimes both “sections” of a multi-accent phrase word will have
              the same pitch, such as “切磋琢磨” (せっさ-たくま [1]-[1]).
            </p>
            <p>
              In the video, it was mentioned that it’s not uncommon for words to
              have multiple possible accents. Sometimes, one possible accent
              will treat the entire word as a single accent phrase, while
              another will treat it as a multi-accent phrase word. For example,
              the word “毀誉褒貶” can be pronounced as either “きよほうへん [1]”
              or “きよ・ほうへん [1]-[0]”.
            </p>
            <p>
              <img
                class="aligncenter wp-image-3111"
                src="~/assets/mia-japanese-addon/mia-japanese-multiaccent2.gif"
                alt=""
                width="600"
                height="248"
              />
            </p>
            <p>
              When a word has multiple possible accents, and one of the
              alternate accents has multiple accent phrases, this is displayed
              as a circle (instead of a diamond), which is split in half and
              colored to represent the accents of the first and second sections
              accordingly.
            </p>
            <h1 id="js-support">MIA Japanese and Japanese Support</h1>
            <p>
              Having Japanese MIA and
              <nuxt-link
                class="link3"
                to="https://ankiweb.net/shared/info/3918629684"
                rel="noopener"
              >
                Japanese Support</nuxt-link
              >
              installed at the same time will not cause any problems.
            </p>
            <p>
              That said, the two add-ons use a different syntax. So, if you plan
              on using both, please follow the instructions below to avoid
              conflict between the two add-ons.
            </p>
            <p>
              <img
                class="aligncenter wp-image-3122"
                src="~/assets/mia-japanese-addon/mia-japanese-js-support.png"
                alt=""
                width="600"
                height="518"
              />
            </p>
            <p>
              For fields that you want to generate with the Japanese Support
              add-on, inside your note type template, add
              “<code>furigana:</code>” in front of the field name, inside the
              curly brackets. Also, make sure to <strong>not</strong> add that
              field to the
              <nuxt-link class="link3" to="#active-fields" rel="noopener"
                >active fields table</nuxt-link
              >.
            </p>
            <p>
              For fields that you plan on generating with the MIA Japanese
              add-on, add them to the
              <nuxt-link class="link3" to="#active-fields" rel="noopener"
                >active fields table</nuxt-link
              >. Also, in your note type template, make sure that
              <code>furigana:</code> is <strong>not</strong> inserted in front
              of the field name, inside of the curly brackets.
            </p>
            <p>
              <img
                class="aligncenter wp-image-3129"
                src="~/assets/mia-japanese-addon/mia-japanese-js-convert.gif"
                alt=""
                width="700"
                height="575"
              />
            </p>
            <p>
              If you want to convert cards that you originally generated with
              the Japanese Support add-on to MIA Japanese syntax, use the
              <nuxt-link class="link3" to="#mass-generation" rel="noopener"
                >mass generation</nuxt-link
              >
              feature to re-generate with MIA Japanese syntax for those cards.
            </p>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.article-content {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>
