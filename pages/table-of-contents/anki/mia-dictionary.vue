<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/anki">Anki</nuxt-link>
    </p>
    <h1>MIA Dictionary</h1>
    <div class="article-content">
      <p style="text-align: center;">Table of Contents</p>

      <ul>
        <li><nuxt-link to="#intro">Intro</nuxt-link></li>
        <li>
          <nuxt-link to="#installation">Installation</nuxt-link>
          <ul>
            <li><nuxt-link to="#add-on">Add-on</nuxt-link></li>
            <li><nuxt-link to="#dictionaries">Dictionaries</nuxt-link></li>
            <li>
              <nuxt-link to="#frequency-lists">Frequency Lists</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#conjugation-tables">Conjugation Tables</nuxt-link>
            </li>
            <li><nuxt-link to="#header-csv">Header.csv</nuxt-link></li>
          </ul>
        </li>
        <li>
          <nuxt-link to="#basic-functionality">Basic Functionality</nuxt-link>
          <ul>
            <li>
              <nuxt-link to="#opening-the-dictionary"
                >Opening the Dictionary</nuxt-link
              >
            </li>
            <li><nuxt-link to="#searching">Searching</nuxt-link></li>
            <li>
              <nuxt-link to="#main-window">Main Dictionary Window</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#sending-definitions"
                >Sending Definitions to Fields</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li><nuxt-link to="#card-exporter">Card Exporter</nuxt-link></li>
        <li>
          <nuxt-link to="#mass-export">Mass Exporting Definitions</nuxt-link>
        </li>
        <li><nuxt-link to="#settings">Settings</nuxt-link></li>
      </ul>
      <h1 id="intro">Intro</h1>
      <p>
        MIA Dictionary is an Anki 2.1 add-on designed to radically streamline
        the process of using Anki for language learning. It comes with a host of
        features that help users perform precise look-ups and swiftly craft
        cards, including
        <strong
          >global hotkeys for instant look-ups, automatic deconjugation,
          frequency list integration, single-click definition exporting to
          cards, mass definition exporting, on-the-fly card creation</strong
        >, and more.
      </p>

      <p>
        You can download the add-on
        <a
          href="https://ankiweb.net/shared/info/1655992655"
          target="_blank"
          rel="noopener noreferrer"
          ><strong>here</strong></a
        >.
      </p>
      <p>
        This guide can also be viewed in the "User Guide" tab of the add-on's
        settings.https://youtu.be/iKldS0JLVR0
      </p>
      <h1 id="installation">Installation</h1>
      <h2 id="add-on">Add-on</h2>

      <p>
        MIA Dictionary can be installed in the same manner as any other Anki
        add-on.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-install-1.gif"
        alt=""
        width="600"
        height="354"
      />

      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-install-2.gif"
        alt=""
        width="600"
        height="390"
      />
      <h3>macOS</h3>

      <p>
        If you're using macOS, you must give Anki accessibility permissions in
        order for the add-on's global hotkeys to function.
        <a
          href="https://nuance.custhelp.com/app/answers/detail/a_id/15303/~/how-to-enable-accessibility-in-os-x"
          target="_blank"
          rel="noopener noreferrer"
          >This link</a
        >
        explains how to do this.
      </p>
      <b>Linux</b>

      Unfortunately, Linux is not officially supported and the add-on may not
      work properly under all environments. That said, please check the
      <a
        href="https://github.com/mass-immersion-approach/MIA-Dictionary-Addon"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub repository</a
      >
      for any community fixes that may be available.
      <p></p>
      <h3>Deleting MIA Dictionary</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-delete-erorr.gif"
        alt=""
        width="400"
        height="232"
      />

      <p>
        Attempting to delete MIA Dictionary while it’s enabled will cause the
        error shown in the above GIF to occur. This happens because MIA
        Dictionary’s SQLite database is currently open, and open SQLite
        databases cannot be deleted.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-delete.gif"
        alt=""
        width="400"
        height="232"
      />

      <p>
        To prevent this, simply disable MIA Dictionary and restart Anki before
        deleting the add-on. Alternatively, you can also delete the add-on by
        closing Anki and deleting MIA Dictionary’s folder from your Anki add-ons
        folder:
      </p>
      <code
        >C:/Users/[<em>user</em>]/AppData/Roaming/Anki2/addons21/1655992655</code
      >

      <h2 id="dictionaries">Dictionaries</h2>
      <p>
        You can find a library of open-source dictionaries and frequency lists
        pre-packaged for use with the add-on
        <a
          href="https://mega.nz/#F!eyYwyIgY!3q4XQ3BhdvkFg9KsPe5avw!bz4ywa5A"
          target="_blank"
          rel="noopener noreferrer"
          ><strong>here</strong></a
        >.
      </p>
      <p>
        (If you have trouble downloading from MEGA, make sure to
        <a
          href="https://www.lifewire.com/download-multiple-files-in-google-chrome-4103618"
          target="_blank"
          rel="noopener noreferrer"
          >allow any site to download multiple files automatically</a
        >
        in your browser.)
      </p>
      <p>
        To quickly get started, download the <em>entire</em> folder for your
        target language, and place it in the following directory:
      </p>
      <code>
        C:/Users/[<em>user</em>]/AppData/Roaming/Ank21/addons21/1655992655/
        user_files/dictionaries
      </code>

      <p>
        Each folder contains every open-source dictionary currently available
        for that language. When available, a frequency list and/or conjugation
        table is included as well.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-mega.gif"
        alt=""
        width="600"
        height="412"
      />

      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-extract.gif"
        alt=""
        width="600"
        height="381"
      />

      <p>
        Next time you open Anki, the dictionaries will automatically be
        installed into the add-on. Once the installation finishes, the
        dictionaries will be ready for use.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-install-5.gif"
        alt=""
        width="450"
        height="333"
      />

      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-search-demo.gif"
        alt=""
        width="450"
        height="360"
      />
      <h3>Supported File Formats</h3>
      <p>
        MIA Dictionary supports dictionaries in two different file formats: the
        Yomichan Dictionary format, and the proprietary MIA Dictionary format.
      </p>
      <a
        href="https://foosoft.net/projects/yomichan/"
        target="_blank"
        rel="noopener noreferrer"
        >Yomichan</a
      >
      is a Japanese dictionary browser extension for Firefox and Chrome.
      Dictionaries for Yomichan come in the form of a ZIP file containing a
      series of JSON files. To use a Yomichan dictionary with MIA Dictionary,
      extract the JSON files inside the ZIP file into a folder.
      <h3>Proprietary MIA Dictionary Format</h3>
      <p>
        Dictionaries in the proprietary MIA Dictionary format consist of a
        single JSON file. The format of the JSON file is as follows:
      </p>
      <p>
        [{"term": "", "altterm": "", "pronunciation": "", "definition": "",
        "pos": "", "examples": "", "audio": ""}, {"term": "", "altterm": "",
        "pronunciation": "", "definition": "to separate", "pos": "", "examples":
        "", "audio": ""}]
      </p>

      <p>
        Where,
      </p>
      <ul>
        <li>“Term” is the term being defined.</li>
        <li>
          “Altterm” (alternative term) is an alternative form of the term. For
          searching purposes, the alterm functions the same as the main term.
          Each entry can have one altterm value. If the altterm is the same as
          the main term, it will be ignored.
        </li>
        <li>“Pronunciation” is how the term is pronounced.</li>
        <li>“Pos” is part of speech.</li>
        <li>“Examples” is for example sentences.</li>
        <li>
          “Audio” is the location of an audio file of the term being pronounced.
        </li>
      </ul>
      <p>
        “Altterm”, “pos”, “examples”, and “audio” can be empty strings. “pos”,
        “examples”, and “audio” currently not yet implemented in the add-on.
      </p>
      <p>
        Example from CEDICT Chinese to English dictionary:
      </p>
      <p>
        [{"term": "分隔", "altterm": "", "pronunciation": "fēn gé",
        "definition": "to divide/to separate/partition", "pos": "", "examples":
        "", "audio": ""}, {"term": "分离", "altterm": "分離", "pronunciation":
        "fēn lí", "definition": "to separate", "pos": "", "examples": "",
        "audio": ""}]
      </p>

      <p>
        Example from Kengdict Korean to English dictionary:
      </p>
      <p>
        [{"term": "사회", "altterm": "社會", "pronunciation": "", "definition":
        "culture,society", "pos": "", "examples": "", "audio": ""}, {"term":
        "사회 계층", "altterm": "", "pronunciation": "", "definition":
        "stratification", "pos": "", "examples": "", "audio": ""}]
      </p>
      <h3>Installing Dictionaries</h3>
      <p>
        To install a dictionary, simply place it within the correct location
        inside the add-on’s folder structure and restart Anki. Upon profile
        load, the dictionary will automatically be imported into the add-on.
      </p>
      <em>How it works:</em>
      <p>
        In order to maximize the search speeds, MIA Dictionary creates a single
        SQLite database to use when searching:
      </p>
      <!-- <p
        >C:Users[<em>user</em>]AppDataRoamingAnki2addons211655992655user_filesdbdictionaries.sqlite</p
      > -->
      <p>
        This SQLite database is created through importing the dictionaries
        contained within the add-on’s folder structure. Each time an Anki
        profile is loaded, the add-on checks to see if any changes have been
        made to the folder structure. If there has, the SQLite database is
        updated to stay in sync with the current folder structure. This system
        allows users to easily add and remove dictionaries simply by arranging
        the folder structure.
      </p>
      <h3>Folder Structure</h3>

      <p>
        The folder structure for dictionaries is as follows:
      </p>

      <code>
        C:/Users/[<em>user</em>]/AppData/Roaming/
        Anki2/addons21/1655992655/user_files/ dictionaries/[<em>language</em>]/
        [<em>dictionary_name</em>]/dictionary_files.json
      </code>

      <p>
        Within the “dictionaries” folder, dictionaries are grouped together into
        folders based on language.
      </p>

      <p>
        The language category of bilingual dictionaries is based on the terms
        defined in the dictionary. For example, a dictionary that translates the
        meaning of Japanese words into English would be considered a “Japanese”
        dictionary.
      </p>
      <p>
        Dictionary files are placed within their own folder, inside of the
        folder for the dictionary’s language. In order for dictionaries to be
        imported properly, the dictionary files must be contained within a
        folder just for that dictionary.
      </p>
      <p>
        For Yomichan dictionaries, extract the JSON files inside the ZIP file
        into a folder you created for the dictionary. For proprietary MIA
        Dictionary format dictionaries, place the single JSON file inside a
        folder you created for the dictionary.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-naming-convention.png"
        alt=""
        width="350"
        height="234"
      />

      <p>
        The name of the folder will determine the dictionary’s name within the
        add-on. Every dictionary's folder must have a unique name, regardless of
        the language category. Folder names must not contain any special
        characters (spaces, punctuation, parentheses, brackets, math symbols
        etc.). To include spaces in a dictionary’s name, use underscores;
        underscores within folder names will automatically appear as spaces
        inside of the add-on.
      </p>
      <h3>Removing Dictionaries</h3>
      <p>
        To remove a currently installed dictionary, simply remove the
        dictionary’s file and folder from the add-ons folder structure and
        restart Anki. Upon profile load, the dictionary will automatically be
        removed from the database.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-remove-dictionary.png"
        alt=""
        width="400"
        height="107"
      />

      <p>
        Once the dictionary is removed from the database, the database will be
        optimized. Although removing a dictionary from the database is nearly
        instantaneous, this optimization process can take some time to complete.
        While it is taking place, the “removing dictionaries” progress bar will
        remain at 100%. This can make it appear as though Anki has frozen, but
        in reality, this is not the case.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-remove-dict-complete.png"
        alt=""
        width="400"
        height="121"
      />

      <p>
        To ensure the optimization process gets fully completed, please make
        sure not to interrupt Anki until the “all dictionaries successfully
        removed” confirmation window appears.
      </p>

      <p>
        The more dictionaries you have currently installed, the longer the
        optimization process will take.
      </p>

      <h3>Built-in Dictionaries</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-google-forvo.gif"
        alt=""
        width="500"
        height="433"
      />

      <p>
        MIA Dictionaries comes with two built-in dictionaries: Google Images and
        Forvo.
      </p>

      <blockquote>
        “<a href="https://forvo.com/" target="_blank" rel="noopener noreferrer"
          >Forvo.com</a
        >
        is a website that allows access to, and playback of, pronunciation sound
        clips in many different languages in an attempt to facilitate the
        learning of languages.” -<a
          href="https://en.wikipedia.org/wiki/Forvo"
          target="_blank"
          rel="noopener noreferrer"
          >Wikipedia</a
        >
      </blockquote>

      <p>
        For most of the add-on’s features, Google Images and Forvo function the
        same as normal dictionaries.
      </p>

      <p>
        You can modify Google Image’s search region and resizing parameters, and
        Forvo’s language, in <nuxt-link to="#settings">Settings</nuxt-link>.
      </p>

      <h2 id="frequency-lists">Frequency Lists</h2>
      Frequency lists are used in the
      <nuxt-link to="#frequency-score">frequency score</nuxt-link> feature.
      <h3>Frequency List Format</h3>

      <p>
        In order for the frequency score feature to work, frequency lists must
        be configured as JSON files formatted in the following way:
      </p>

      <p>
        ["you", "I", "the", "to", "a", "it", "and", "that", "of", "in", "what",
        "is", "me", "we"]
      </p>

      <p>
        In this example, “you” represents the most common word in the language,
        followed by “I”, etc.
      </p>

      <p>
        For Japanese, there is also an alternative format that allows readings
        to be associated with each word:
      </p>
      <p>
        [["此れ","コレ"], ["私","ワタクシ"], ["時","トキ"], ["まで","マデ"],
        ["から","カラ"], ["見る","ミル"]]
      </p>

      <p>
        This allows the add-on to differentiate words that are written the same
        but pronounced differently, e.g., 心中(しんちゅう) and 心中(しんじゅう).
        All readings in this format must be in katakana, even for words usually
        written in hiragana.
      </p>

      <p>
        Something to watch out for is that when multiple words are written the
        same way, they will all receive the same frequency score as the one
        that’s most frequently used. For example, take the verb “combine” and
        the noun “combine”. Although these two words share the same spelling,
        they’re pronounced differently and mean different things. If the verb
        “combine” was a “3 star” word and the noun “combine” was a “2 star”
        word, both words would appear to be “3 star” within the add-on (see the
        <nuxt-link to="#frequency-score">frequency score</nuxt-link> section for
        an explanation of these terms). In the case of Japanese, this issue can
        be partially avoided by using a frequency list that includes readings.
      </p>

      <h3>Frequency List Installation</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-frequency-11.png"
        alt=""
        width="600"
        height="157"
      />

      <p>
        To install a frequency list, name the file
        <code>frequency.json</code> and place it in the corresponding language
        category’s folder:
      </p>
      <p>
        C:/Users/[<em>user</em>]/AppData/Roaming/ Anki2/addons/211655992655/
        user_files/dictionaries/[<em>language</em>]
      </p>
      <p>Only one frequency list per language can be installed at a time.</p>

      <p>
        At the time of importing a new dictionary, the add-on integrates
        frequency information from <code>frequency.json</code> directly into
        that dictionary’s information within the database. Because of this, a
        given frequency list will only be applied to dictionaries that are
        installed <em>after</em> the frequency list was. Said another way, when
        you install a new frequency list, it won’t automatically be applied to
        the dictionaries that are already installed. To apply a frequency list
        to dictionaries that were installed before the frequency list was,
        remove and reinstall the dictionaries.
      </p>
      <h2 id="conjugation-tables">Conjugation Tables</h2>

      <p>
        Conjugation tables are used in
        <nuxt-link to="#deconjugation">Deconjugation Mode</nuxt-link>.
      </p>

      <p>
        Check out the Deconjugation Mode section for an explanation of what
        conjugation tables are and how they work.
      </p>

      <h3>Conjugation Table Format</h3>

      <p>
        In order for conjugation tables to function properly, they must be
        configured as JSON files formatted in the following way:
      </p>

      <p>
        [{"inflected":"いなさい","dict":["う"]},
        {"inflected":"いました","dict":["う"]},
        {"inflected":"いません","dict":["う"]},
        "inflected":"かったら","dict":["い"]},
        {"inflected":"かったり","dict":["い"]},
        {"inflected":"きすぎる","dict":["く","くる"]},
        {"inflected":"ぎすぎる","dict":["ぐ"]},
        {"inflected":"きちゃう","dict":["くる"]},
        {"inflected":"きなさい","dict":["く","くる"]},
        {"inflected":"ぎなさい","dict":["ぐ"]},
        {"inflected":"きました","dict":["く","くる"]},
        {"inflected":"ぎました","dict":["ぐ"]},
        {"inflected":"きません","dict":["く","くる"]}]
      </p>

      <p>
        Where,
      </p>
      <ul>
        <li>
          “Inflected” is a conjugated word-ending (or in the case of irregular
          words, an entire conjugated word, e.g., ran).
        </li>
        <li>
          “Dict” is the corresponding dictionary form-ending (or in the case of
          irregular words, the entire corresponding dictionary form, e.g., run).
        </li>
      </ul>
      <h3>Conjugation Table Installation</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-conjugation-example.png"
        alt=""
        width="600"
        height="281"
      />

      <p>
        To install a conjugation table, name the file
        <code>conjugations.json</code> and place it in the corresponding
        language category’s folder
      </p>
      <p>
        C:/Users/[<em>user</em>]/AppData/Roaming/
        Anki2/addons/211655992655/user_files/ dictionaries/[<em>language</em>]
      </p>
      <p>Only one conjugation table can be installed at a time.</p>
      <p>
        Unlike frequency lists and header.csv’s, once a conjugation table is
        installed, it will immediately be applied to all the dictionaries in the
        given language category. Removing and reinstalling dictionaries that
        were installed before the conjugation table was is not necessary.
      </p>
      <h2 id="header-csv">Header.csv</h2>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-default-header.png"
        alt=""
        width="600"
        height="29"
      />

      <p>
        By default, the order that information in definition headers appears in
        is "term → alternative term → pronunciation".
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-header22.png"
        alt=""
        width="600"
        height="135"
      />

      <p>
        You can modify this order for dictionaries that belong to a given
        language category by creating a CSV file titled
        <code>header.csv</code> and placing it in that language category’s
        folder
      </p>
      <p>
        C:/Users/[<em>user</em>]/AppData/Roaming/ Anki2/addons21/1655992655/
        user_files/dictionaries/[<em>language</em>]
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-header4.png"
        alt=""
        width="250"
        height="87"
      />

      <p>
        The following are the five possible configurations for header.csv's
        contents:
      </p>
      <p>term,pronunciation,altterm</p>
      <p>altterm,term,pronunciation</p>
      <p>altterm,pronunciation,term</p>
      <p>pronunciation,term,altterm</p>
      <p>pronunciation,altterm,term</p>

      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-header3.png"
        alt=""
        width="600"
        height="29"
      />

      <p>
        The order the information in headers appears in for a given dictionary
        is determined at the time the dictionary is initially imported into the
        database. Because of this, a given header.csv will only be applied to
        dictionaries that are installed <em>after</em> the header.csv was
        created. Said another way, when you add a new header.csv, it won’t
        automatically be applied to the dictionaries that are already installed.
        To apply a header.csv to dictionaries that were installed before the
        header.csv was created, remove and reinstall the dictionaries.
      </p>

      <h1 id="basic-functionality">Basic Functionality</h1>
      <h2 id="opening-the-dictionary">Opening the Dictionary</h2>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-open-close2.png"
        alt=""
        width="400"
        height="146"
      />

      <p>
        You can access the dictionary by going to “MIA” on Anki’s menu bar and
        selecting “Open Dictionary”. Alternatively, you can use the hotkey
        “Ctrl+W” (“⌘+W” on Mac) to both open and close the dictionary.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-welcome3.png"
        alt=""
        width="600"
        height="317"
      />

      <p>
        The dictionary will open to the welcome screen, where you can see an
        overview of the add-on’s hotkeys.
      </p>
      <p>
        Global hotkeys are hotkeys that work anywhere on your computer when Anki
        is open. If the add-on's global hotkeys are causing collisions with
        other programs, you can turn them off in
        <nuxt-link to="#settings">Settings</nuxt-link>.
      </p>

      <p>
        The welcome screen will automatically disappear once you search a word.
      </p>

      <h2 id="searching">Searching</h2>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-search1.gif"
        alt=""
        width="600"
        height="266"
      />

      <p>
        In order to search a word, type it into the Search Bar and press the
        Search Button.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-ctrl-s1.gif"
        alt=""
        width="800"
        height="250"
      />

      <p>
        You can also search a word anywhere inside of Anki (including the
        dictionary itself) by highlighting it, right-clicking, and selecting
        “Search”. The hotkey to search a word within Anki is “Ctrl+S” on PC or
        “⌘+S” on Mac (“S” for “search”).
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-ctrl-c-space1.gif"
        alt=""
        width="800"
        height="320"
      />

      <p>
        You can search a word outside of Anki by highlighting it and pressing
        the global hotkey “Ctrl+C+Space” on PC or “⌘+C+B” on Mac (press the keys
        in that order; do not release any until they are all pressed).
      </p>

      <h3 id="dictionary-group">Dictionary Groups</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-groups2.gif"
        alt=""
        width="550"
        height="493"
      />

      <p>
        Dictionary Groups are specific sets of dictionaries that will be looked
        through when searching. You can select which Dictionary Group to search
        with the drop-down on the top-left. You can create custom Dictionary
        Groups in <nuxt-link to="#settings">Settings</nuxt-link>.
      </p>

      <p>
        The add-on also comes with some built-in Dictionary Groups:
      </p>

      <ul>
        <li>
          <em>All</em> (searches every dictionary currently installed excluding
          Google Images and Forvo); dictionaries appear in alphabetical order)
        </li>
        <li><em>Google Images</em></li>
        <li><em>Forvo</em></li>
        <li>
          <em>Language specific</em> (searches every dictionary inside the
          selected language’s folder; dictionaries appear in alphabetical order)
        </li>
      </ul>
      <h3 id="search-mode">Search Mode</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-search-mode.gif"
        alt=""
        width="550"
        height="448"
      />

      <p>
        The Search Mode controls the specific manner with which the add-on
        searches through dictionaries. You can change the Search Mode with the
        drop-down left of the Search Bar.
      </p>

      <p>
        There are six different Search Modes:
      </p>

      <ul>
        <li>
          <em>Forward</em>: searches dictionaries for entries that begin with
          your search query.
        </li>
        <li>
          <em>Backward</em>: searches dictionaries for entries that end with
          your search query.
        </li>
        <li>
          <em>Exact</em>: searches dictionaries for entries that perfectly match
          your search query.
          <ul>
            <li>
              This mode is compatible with
              <nuxt-link to="#deconjugation">Deconjugation Mode</nuxt-link>; it
              will search for entries that exactly match deconjugated versions
              of your search query.
            </li>
            <li>
              Searches in this mode will be considerably faster than the other
              modes. The reason for this is that this mode only looks for a
              direct case-sensitive match within the searched dictionaries, and
              computers are much faster at determining whether a given piece of
              text matches another piece of text exactly than they are at
              determining partial matches.
            </li>
          </ul>
        </li>
        <li>
          <em>Definition</em>: searches for entries that contain your search
          query inside the contents of their definition.
        </li>
        <li>
          <em>Example</em>: searches for entries whose definition contains an
          example sentence that contains your search query.
          <ul>
            <li>
              This mode works by specifically searching the contents of “「」”
              brackets. Because of this, this mode only works with Japanese
              monolingual dictionaries.
            </li>
          </ul>
        </li>
        <li>
          <em>Pronunciation</em>: the same as <em>Forward</em>, but only
          searches for entries whose pronunciation matches the search query.
          <ul>
            <li>
              <em>Note</em>: this search mode was added after this guide was
              original created, and thus doesn't appear in the above picture.
            </li>
          </ul>
        </li>
      </ul>
      <h3>Tabs</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-tabs.gif"
        alt=""
        width="600"
        height="284"
      />

      <p>
        Tabs allow you to easily reference the result of multiple different
        searches.
        <img
          src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-tab-modes.gif"
          alt=""
          width="90"
          height="80"
        />
      </p>

      <p>
        There are two different modes related to tabs:<em> Single-tab Mode</em>
        and <em>Multi-tab Mode</em>. You can toggle between them by pressing the
        button with the file folder icon.
      </p>

      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-multi-tab.gif"
        alt=""
        width="600"
        height="288"
      />

      <p>
        In Multi-tab Mode, each search automatically opens a new tab.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-single-tab.gif"
        alt=""
        width="600"
        height="287"
      />

      <p>
        In Single-tab Mode, search results appear in the current tab, overriding
        the previous search.
      </p>
      <strong
        ><img
          src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-close-tabs.gif"
          alt=""
          width="600"
          height="271"
      /></strong>

      <p>
        You can close a tab by right-clicking it. Closing the dictionary will
        result in all tabs being reset.
      </p>

      <h3 id="deconjugation">Deconjugation Mode</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-deconjugation-demo.gif"
        alt=""
        width="800"
        height="399"
      />

      <p>
        Deconjugation Mode allows you to search the conjugated forms of words
        and automatically find entries for their original, unconjugated form.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-deconjugation-mode.gif"
        alt=""
        width="80"
        height="75"
      />

      <p>
        You can toggle Deconjugation Mode on and off by pressing the button with
        a Rubik's Cube icon. When all three rows of the Rubik's Cube are
        aligned, Deconjugation Mode is off. When the middle row is partially
        rotated, Deconjugation Mode is on.
      </p>

      <p>
        In order for Deconjugation Mode to function for a given language, a
        <nuxt-link to="#conjugation-tables">conjugation table</nuxt-link> for
        that language must be installed.
      </p>

      <p>
        A conjugation table is a list of all conjugated word-endings that exist
        in a language, and every potential dictionary form-ending corresponding
        to each of those conjugated word-endings. In the case of irregular
        words, the conjugation table will contain the entire conjugated word
        (e.g., ran) and its entire corresponding dictionary form (e.g., run).
      </p>

      <p>
        When a search is conducted with Deconjugation Mode on, the add-on will
        check the end of your search query for matching conjugated word-endings
        in the conjugation table. For each match that’s found, the add-on will
        replace the conjugated word-ending with every potential corresponding
        dictionary form ending, and search that along with the original search
        query.
      </p>

      <p>
        Deconjugation Mode is compatible with the “Exact”
        <nuxt-link to="#search-mode">Search Mode</nuxt-link>; the add-on will
        search for entries that exactly match potential deconjugated versions of
        your search query.
      </p>

      <p>
        Due to the brute force nature of this process, some unrelated entries
        may show up among search results. For Japanese terms, searching verbs
        and adjectives in their kanji form (as opposed to in full kana) will
        result in fewer unrelated entries.
      </p>

      <p>
        Although creating more precise deconjugation algorithms is possible,
        they would have to be specific to individual languages. This method of
        deconjugation was chosen because it’s equally applicable to any
        language.
      </p>

      <h3>Brackets</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-brackets-3.gif"
        alt=""
        width="800"
        height="604"
      />

      <p>
        In some languages, such as Japanese, brackets are often used to display
        the readings of words. Sometimes these brackets are placed directly in
        the middle of words. In these cases, in order to look up the word,
        normally you would have to manually remove the brackets before
        searching.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-brackets1.gif"
        alt=""
        width="800"
        height="309"
      />

      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-brackets2.gif"
        alt=""
        width="800"
        height="297"
      />

      <p>
        In order to remove this inconvenience, the add-on automatically excludes
        brackets and the contents of closed brackets from searches. The
        following are the specific types of brackets that are excluded:
        <code>(), [], （）, 《》</code>.
      </p>

      <h3>Search Collection</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-search-collection2.gif"
        alt=""
        width="800"
        height="570"
      />

      <p>
        Anywhere within Anki (including the dictionary), you can search your own
        Anki collection for a word or phrase by highlighting it, right-clicking,
        and selecting “Search Collection”.
      </p>
      <h2 id="main-window">Main Dictionary Window</h2>

      <p>
        When a search result contains entries that span across multiple
        dictionaries, entries from the same dictionary are grouped together
        under that dictionary’s header. The order that dictionaries are
        displayed is determined by the currently selected
        <nuxt-link to="#dictionary-group">Dictionary Group</nuxt-link>.
      </p>

      <p>
        Within a given dictionary, if a
        <nuxt-link to="#frequency-lists">frequency list</nuxt-link> has been
        installed for the dictionary’s language, entries will be displayed in
        order of frequency, with the most frequent entry shown first. If a
        frequency list hasn’t been installed, entries will be displayed in
        alphabetical order.
      </p>

      <h3>Dictionary Headers</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-header.png"
        alt=""
        width="600"
        height="37"
      />

      <p>
        The name of the dictionary appears on the left side of dictionary
        headers. To the right, there’s the Duplicate Header toggle, Output Mode
        drop-down, Field Selector drop-down, and Next/Previous Dictionary
        button.
      </p>

      <p>
        The Duplicate Header toggle, Output Mode drop-down, and Field Selector
        will be explained in the
        <nuxt-link to="#sending-definitions"
          >Sending Definitions to Fields</nuxt-link
        >
        section.
      </p>

      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-next-entry.gif"
        alt=""
        width="700"
        height="451"
      />

      <p>
        The Next/Previous Dictionary button allows you to jump between adjacent
        dictionary headers.
      </p>

      <h3>Definition Headers</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-entry-header3.png"
        alt=""
        width="600"
        height="32"
      />

      <p>
        On the left side of definition headers are the term, alternative term,
        pronunciation, and frequency score. On the right, there’s the Send to
        Exporter button, Copy button, Send to Field button, and Next/Previous
        Entry button.
      </p>

      <p>
        The order in which the term, alternative term, and pronunciation appear
        in can be modified by adding a
        <nuxt-link to="#header-csv">header.csv</nuxt-link>. The brackets
        surrounding the term and alternate term can be modified in
        <nuxt-link to="#settings">Settings</nuxt-link>. Frequency scores will be
        explained in the following section.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-copy4.gif"
        alt=""
        width="800"
        height="216"
      />

      <p>
        When none of the definition is highlighted, the Copy button copies the
        entire definition to your clipboard. When part of the definition is
        highlighted, the Copy button copies the definition header and the
        highlighted portion to your clipboard.
      </p>

      <p>
        <em>Note</em>: Previously, when part of the definition was highlighted,
        the Copy button would copy <em>only</em> the highlighted portion to your
        clipboard, without the definition header. This is reflected in the above
        picture, which was created before this change in functionality.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-next-entry.gif"
        alt=""
        width="700"
        height="451"
      />

      <p>
        The Next/Previous Entry button allows you to jump between adjacent
        definition headers. The Send to Exporter button will be explained in the
        <nuxt-link to="#card-exporter">Card Exporter</nuxt-link> section. The
        Send to Field button will be explained in the
        <nuxt-link to="#sending-definitions"
          >Sending Definitions to Fields</nuxt-link
        >
        section.
      </p>

      <h3 id="frequency-score">Frequency Score</h3>
      From the perspective of a language learner, the more often a word is used
      in native speech and text, the more that learning it will increase
      comprehension. Because of this, the value of a word is directly
      proportional to how frequency they’re used.

      <p>
        Frequency scores are a tool for quickly assessing the frequency of
        words, designed to help simplify the decision of whether a word is worth
        learning or not. Each word is given a score between 5 and 0,
        corresponding to its position on a frequency list:
      </p>

      <p>
        ★★★★★: 0 - 1.5k ★★★★: 1.5k - 5k ★★★: 5k - 15k ★★: 15k - 30k ★: 30k - 60k
        __: 60k+
      </p>

      <p>
        For example, if a word is ranked “5 star”, you know that it’s one of the
        1,500 most common words in the language, and extremely important to
        learn. Conversely, if a word is ranked “2 star”, that means it sits
        somewhere between 15,000 and 30,000 on a frequency list, is relatively
        uncommon, and likely not worth learning until reaching an advanced level
        in the language.
      </p>

      <p>
        In order for frequency scores to be displayed for a given language, a
        <nuxt-link to="#frequency-lists">frequency list</nuxt-link> for that
        language must be installed.
      </p>

      <h3>Sidebar</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-sidebar-1.gif"
        alt=""
        width="600"
        height="550"
      />

      <p>
        The Sidebar lets you see an overview of the current search results. You
        can open and close the Sidebar by pressing the button to the right to
        the search button.
      </p>

      <p>
        By right-clicking on a dictionary, you can minimize its entries. By
        clicking on an entry, you can instantly jump to its position in the main
        window.
      </p>
      <h3>Zoom</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-zoom1.gif"
        alt=""
        width="600"
        height="191"
      />

      <p>
        You can make the text size of definitions larger or smaller by pressing
        the “+” and “-” buttons to the right of the Sidebar button.
      </p>

      <h3>History</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-history.gif"
        alt=""
        width="600"
        height="421"
      />
      You can view your search history by pressing the button with a clock icon.
      You can re-search a term from your search history by double-clicking on
      it. You can also reset your history by pressing "Clear History".
      <h3>Night Mode</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-night-mode2.gif"
        alt=""
        width="600"
        height="193"
      />

      You can toggle Night Mode on and off by pressing the button with a
      moon/sun icon.
      <h2 id="sending-definitions">Sending Definitions to Fields</h2>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-send-to-field.gif"
        alt=""
        width="800"
        height="395"
      />

      <p>
        MIA Dictionary can send definitions directly to the fields of cards.
      </p>

      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-select-field.gif"
        alt=""
        width="800"
        height="462"
      />

      <p>
        First, choose which fields to send definitions to with the Field
        Selector drop-down. The add-on will remember which fields you select, so
        you’ll only have to do this step the first time you use the feature.
      </p>

      <p>
        Fields are selected on a per-dictionary basis. This is to allow for the
        flexibility of having different dictionaries send definitions to
        specific fields. If you regularly use multiple note-types that each have
        different field names, you can select multiple fields for a single
        dictionary.
      </p>

      <p>
        Once you’ve selected which fields to send to, you can press the Send to
        Field button to send the definition to a card. The Send to Field button
        is the right-facing arrow located on the right side of the definition
        header.
      </p>

      <h3 id="export-target">Export Target</h3>

      <p>
        Definitions can be sent directly to cards anywhere inside of Anki,
        including:
      </p>

      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-send-to-add.gif"
        alt=""
        width="800"
        height="462"
      />

      <p>
        The add window
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-send-to-browser.gif"
        alt=""
        width="800"
        height="354"
      />

      <p>
        The browser
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-send-to-edit.gif"
        alt=""
        width="800"
        height="364"
      />

      <p>
        The edit window
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-send-to-review.gif"
        alt=""
        width="800"
        height="381"
      />

      <p>
        And even the review screen, while in the middle of reviewing a card.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-send-to-multiple.gif"
        alt=""
        width="800"
        height="261"
      />

      <p>
        The Send to Field button will only send definitions to one card at a
        time. If multiple cards are selected across different Anki windows (for
        example, if a card is selected in the browser and the add window are
        open at the same time), the definition will be sent to whichever Anki
        window was most recently selected. If no card is selected in any of
        Anki’s windows, the Send to Field button will not do anything.
      </p>

      <p>
        If the definition isn’t sent after pressing the Send to Field button,
        try clicking on the destination card once before pressing the Send to
        Field button again.
      </p>
      <p>
        By turning on “Show Export Target” in
        <nuxt-link to="#settings">Settings</nuxt-link>, you can see which Anki
        window is selected at any given time.
      </p>
      <h3>Sending a Portion of a Definition</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-send-portion.gif"
        alt=""
        width="800"
        height="385"
      />

      <p>
        If nothing is highlighted, the Send to Field button will send the entire
        definition to the destination field. If part of the definition is
        highlighted, the Send to Field button will send the highlighted portion
        along with the definition’s header.
      </p>
      <h3 id="output-modes">Output Modes</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-send-output-mode.png"
        alt=""
        width="275"
        height="119"
      />

      <p>
        When sending a definition directly to a card, there are 3 different
        Output Modes to choose from. The Output Mode determines what happens
        when you send a definition to a field that already has something in it.
        If the target field is empty at the time of sending, all 3 Output Modes
        will function identically.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-send-output-mode-add.gif"
        alt=""
        width="800"
        height="385"
      />

      <p>
        Add: add the definition beneath what’s already in the target field.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-send-output-mode-overwrite.gif"
        alt=""
        width="800"
        height="350"
      />

      <p>
        Overwrite: erase whatever is currently in the target field and replace
        it with the definition.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-send-output-mode-if-empty.gif"
        alt=""
        width="800"
        height="350"
      />

      <p>
        If Empty: only send the definition if the target field is currently
        empty.
      </p>
      <h3>Duplicate Header</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-duplicate-header.gif"
        alt=""
        width="800"
        height="329"
      />

      <p>
        Some dictionaries come pre-loaded with definition headers inside of
        every definition. Because MIA Dictionary automatically adds headers to
        all definitions, entries from these dictionaries will appear to have two
        headers.
      </p>
      <p>
        For dictionaries where this is the case, mark the “Duplicate Header”
        checkbox. This will tell the add-on to automatically remove one of the
        two headers before sending definitions to cards.
      </p>

      <h3>Google Images</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-send-google-images.gif"
        alt=""
        width="800"
        height="389"
      />

      <p>
        The built-in Google Images dictionary allows you to send images to cards
        in a similar manner as normal dictionaries. Simply click to select
        images which images you want to send. Deselect a selected image by
        clicking it again.
      </p>
      <p>
        You can modify Google Image’s search region and resizing parameters in
        <nuxt-link to="#settings">Settings</nuxt-link>.
      </p>

      <h3>Forvo</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-send-forvo.gif"
        alt=""
        width="800"
        height="358"
      />

      <p>
        The built-in Forvo dictionary allows you to send audio files to cards in
        a similar manner as normal dictionaries. Simply mark the checkbox next
        to the clips you want to send.
      </p>

      <p>
        You can modify Forvo’s language in
        <nuxt-link to="#settings">Settings</nuxt-link>.
      </p>

      <h1 id="card-exporter">Card Exporter</h1>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-exporter-demo2.gif"
        alt=""
        width="800"
        height="386"
      />
      Hotkeys used in the above GIF: “Ctrl+C+Alt” → “Ctrl+S” → “Ctrl+Shift+V” →
      “Ctrl+Enter”. Screenshot taken with
      <a href="https://getsharex.com/" target="_blank" rel="noopener noreferrer"
        >ShareX</a
      >[/caption]

      <p>
        The Card Exporter is a tool for quickly and easily creating high-quality
        vocab and sentence cards.
      </p>
      <h2>Export Templates</h2>
      <p>
        To use the Exporter, you must create at least one Export Template.
      </p>
      <p>
        Export Templates function as blueprints for the cards you create with
        the Exporter. They tell the Exporter what note-type to use and which
        fields to send the various contents of cards to.
      </p>
      <p>
        You can create, edit, and delete Export Templates in
        <nuxt-link to="#settings">Settings</nuxt-link>.
      </p>
      <h2>Opening the Exporter</h2>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-open-exporter.gif"
        alt=""
        width="800"
        height="510"
      />

      <p>
        You can open the Exporter by pressing the global hotkey “Ctrl+C+Alt” on
        PC or “⌘+C+Ctrl” on Mac (press the keys in that order; do not release
        any until they are all pressed) while the main dictionary window is
        open.
      </p>
      <p>
        If text is currently highlighted when the hotkey is pressed, the
        highlighted text will automatically be sent to the “Sentence” area of
        the Exporter. If no text is highlighted when the hotkey is pressed, the
        current contents of the clipboard will be sent instead.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-open-exporter-send.gif"
        alt=""
        width="700"
        height="494"
      />

      <p>
        The Exporter can also be opened by pressing the Send to Exporter button
        on the left side of a definition header. This will load that entry’s
        definition into the Definitions area of the Card Exporter.
      </p>
      <p>
        Once the Exporter is open, you can select which Export Template to use
        with the drop-down on the top left, and what deck to export cards to
        with the drop-down to the right of that.
      </p>

      <p>
        You can wipe all currently loaded content from the Exporter at any time
        with the “Clear Current Card” button on the top right.
      </p>
      <h2>Adding Definitions</h2>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-exporter-send-defs.gif"
        alt=""
        width="700"
        height="477"
      />

      <p>
        You can add definitions to the Definitions area of the Exporter by
        pressing the Send to Exporter button on the left side of a definition
        header.
      </p>
      <p>
        What field a given definition is sent to is determined by the currently
        selected Export Template; the Field Selector drop-down does not have any
        influence on the Exporter. The Exporter will honor whether Duplicate
        Header is marked for a given dictionary.
      </p>
      <p>
        The term being defined in the first definition added to the Exporter
        will automatically be added to the Word area.
      </p>
      <p>
        If none of the definition is highlighted, the Send to Exporter button
        will send the entire definition to the Definitions area of the Exporter.
        If part of the definition is highlighted, the Send to Exporter button
        will send the highlighted portion along with the definition’s header.
      </p>
      <p>
        Images from the built-in Google Images dictionary and audio from the
        built-in Forvo dictionary are both treated as normal definitions within
        the Exporter.
      </p>
      <p>
        If multiple definitions are sent to the same field, they’ll appear on
        the card in the order they were added to the Exporter. You can remove a
        definition from the Definitions area by pressing the “X” on the far
        right. On Mac, in order to remove a definition from the Definitions
        area, you have to click on the definition once to highlight it before
        pressing "X".
      </p>
      <h2>Adding Images</h2>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dictionary-exporter-image.gif"
        alt=""
        width="600"
        height="439"
      />

      <p>
        You can add an image that’s copied to the clipboard to the Exporter with
        the global hotkey “Ctrl+Shift+V” on PC or “⌘+Shift+V” on Mac (press the
        keys in that order; do not release any until they are all pressed). Only
        one image per card can be added this way. If you add another image to
        the Exporter after one has already been added, the new image will
        overwrite the previous one.
      </p>
      <p>
        You can modify the maximum and width and height of images in
        <nuxt-link to="#settings">Settings</nuxt-link>.
      </p>

      <p>
        Because images from the built-in Google Images dictionary are treated as
        normal definitions, you can add as many as you would like to a single
        card in the Exporter.
      </p>
      <h2>Adding Audio</h2>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dictionary-exporter-audio.gif"
        alt=""
        width="500"
        height="464"
      />

      <p>
        If an mp3 file is saved to your computer, you can add it to the Exporter
        by copying it to your clipboard and pressing the global hotkey
        “Ctrl+Shift+V” on PC or “⌘+Shift+V” on Mac (press the keys in that
        order; do not release any until they are all pressed).
      </p>
      <p>
        If you’re on a PC, you can use the free program
        <a
          href="https://getsharex.com/"
          target="_blank"
          rel="noopener noreferrer"
          >ShareX</a
        >
        to greatly take advantage of this feature. ShareX can be configured so
        that you can record audio from your computer, save it as an mp3 file,
        and copy that file to your clipboard all with the press of a single
        hotkey (tutorial for setting this up
        <a
          href="https://youtu.be/IS7WzYICAsk"
          target="_blank"
          rel="noopener noreferrer"
          >here</a
        >). Combined with the Exporter, this makes adding audio to cards you
        create from native target language content extremely quickly and easily.
        Although ShareX is only available for PC, you should be able to get the
        same effect with similar programs on Mac as well.
      </p>
      <p>
        Only one mp3 per card can be added this way. If you add another mp3 to
        the Exporter after one has already been added, the new mp3 will
        overwrite the previous one.
      </p>
      <p>
        Because audio files from the built-in Forvo dictionary is treated as
        normal definitions, you can add as many as you would like to a single
        card in the Exporter.
      </p>
      <h2>Adding Cards</h2>
      <p>
        Once you’ve added everything you want to the Exporter, press the “Add”
        button on the bottom right to create the card and add it to your
        collection. You can also use the global hotkey “Ctrl+Enter” on PC or
        “⌘+Enter” on Mac.
      </p>

      <h1 id="mass-export">Mass Exporting Definitions</h1>
      <p>
        You can add definitions to multiple cards at once with the Mass Export
        Definitions feature.
      </p>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-japanese-mass-export.gif"
        alt=""
        width="650"
        height="579"
      />

      <p>
        To use this feature, select the cards you want to add definitions to the
        browser and go to Edit &gt; Export Definitions.
      </p>

      <p>
        For each card selected, the add-on will look up the word in the Input
        field, and export its definitions to the Output Field.
      </p>

      <p>
        Only entries that match the contents of the Input Field exactly will be
        exported. Thus, for the feature to work, the Input Field must contain a
        single, unconjugated word. If the Input Field contains multiple words,
        or the word is in a conjugated form, no definitions will be exported for
        that card. Deconjugation Mode is not applicable to this feature.
      </p>
      <p>
        You can export definitions from up to 3 dictionaries at once. If you
        only want to export definitions from 1 or 2 dictionaries, simply leave
        the remaining drop-down(s) as “None”.
      </p>
      <p>
        The various Output Modes functions the same as in the main dictionary
        window.
      </p>
      <p>
        In the case of multiple entries exactly matching the contents of the
        Input Field for a single dictionary, you can limit how many definitions
        will be exported with Max Per Dict.
      </p>
      <p>
        If a frequency list has been installed for a given dictionary’s
        language, entries will be exported in order of frequency, with the most
        frequent entry exported first. If a frequency list hasn’t been
        installed, entries will be exported in alphabetical order.
      </p>
      <h1 id="settings">Settings</h1>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-settings.png"
        alt=""
        width="700"
        height="443"
      />

      <p>
        You can open the add-on’s Settings by going to “MIA” on Anki’s menu bar
        and selecting “Dictionary Settings”. Alternately, you can click on the
        gear icon at the top of the main dictionary window.
      </p>
      <p>
        You can restore the entirety of Settings to its default configuration at
        any time by pressing "Restore Defaults" in the bottom left corner of
        Settings.
      </p>
      <p>
        If you modify something in Settings while the dictionary is open, the
        changes will not go into effect until you close and reopen the
        dictionary.
      </p>
      <h2>Dictionary Groups</h2>
      <p>
        Check out the
        <nuxt-link to="#dictionary-group">Dictionary Group</nuxt-link> section
        to learn how Dictionary Groups work.
      </p>

      <h3>Adding</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-dictionary-group-setting2.png"
        alt=""
        width="250"
        height="326"
      />

      <p>
        To create a new dictionary group, press “Add Dictionary Group”.
      </p>
      <p>
        Simply choose a unique name, specify which font to display dictionaries
        in, and select which dictionaries to include.
      </p>
      <p>
        There are two ways to select a font. You can use the “Font” drop-down to
        select one that’s already installed on your computer, or specify the
        location of a font file on your computer with “Font From File”. The
        "Font From File" option creates a copy of the selected font file to
        reference in the following directory:
      </p>
      <code
        >C:/User>s/[C:/Users/[user]/AppData/ Roaming/Anki2/addons21/
        1655992655/user_files/fonts</code
      >

      <p>
        Mark the corresponding checkbox to select which dictionaries to include
        in the group. Make sure to select dictionaries in the order you want
        them to appear in. The number to the left of checkboxes represents that
        dictionary’s current position within the group.
      </p>

      <p>
        You can select every currently installed dictionary with “Select All”,
        and deselect every dictionary currently selected with “Remove All”.
      </p>
      <h3>Editing and Removing</h3>

      <p>
        You can view your current Dictionary Groups in the window beneath the
        “Add Dictionary Group” button. The order they appear in within this
        window is not important, as Dictionary Groups always appear in
        alphabetical order within the main dictionary window’s drop-down.
      </p>
      <p>
        You can press “Edit” to modify a Dictionary Group, and “X” to remove
        one. Once a Dictionary Group has been created, the name cannot be
        modified. To change the name of a Dictionary Group, simply delete it and
        recreate the same group with a different name.
      </p>
      <h2>Export Templates</h2>
      Check out the
      <nuxt-link to="#card-exporter">Card Exporter</nuxt-link> section to learn
      how Export Templates work.
      <p></p>
      <h3>Adding</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-export-template-add.png"
        alt=""
        width="250"
        height="347"
      />

      <p>
        To create a new Export Template, press “Add Export Template”.
      </p>
      <p>
        Choose a unique name, specify which note-type to use, and select which
        fields to send each type of information to.
      </p>
      <p>
        By default, definitions will be sent to whichever field is selected for
        “Unspecified Dictionaries Field”.
      </p>
      <p>
        You can also specify for definitions from certain dictionaries to be
        sent to specific fields. To do this, use the two drop-downs beneath
        “Unspecified Dictionaries Field” to select a specific dictionary and
        what field you want its definition sent to, and press “Add”. The current
        dictionary-field relationships are shown in the window below. To remove
        one, press the “X” on the far right.
      </p>
      <p>
        Note that images from the built-in Google Images dictionary and audio
        files from the built-in Forvo dictionary are both treated as normal
        definitions within the Exporter. Only images and mp3s pasted into the
        Card Exporter from outside the add-on will be sent to the "Image Field"
        and "Audio Field" respectively.
      </p>
      The “Entry Separator” is what gets added between definitions when multiple
      definitions are sent to a single field. The default is two line breaks
      (&lt; br &gt;&lt; br &gt;).
      <p></p>

      <h3>Editing and Removing</h3>
      <p>
        You can view your current Export Templates in the window beneath the
        “Add Export Template” button. The order they appear in within this
        window is not important, as Export Templates always appear in
        alphabetical order within the Card Exporter.
      </p>
      <p>
        You can press “Edit” to modify an Export Template, and “X” to remove
        one. Once an Export Template has been created, the name cannot be
        modified. To change the name of an Export Template, simply delete it and
        recreate the same template with a different name.
      </p>
      <h2>Options</h2>
      <h3>Open on Startup</h3>
      <p>
        When selected, the main dictionary window will automatically open
        whenever you load an Anki profile.
      </p>
      <h3>Highlight Example Sentences</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-Highlight-Example-Sentences.png"
        alt=""
        width="600"
        height="119"
      />

      <p>
        When selected, examples sentences within definitions will be
        highlighted.
      </p>
      <p>
        This features works by specifically looking for “「」” brackets. Because
        of this, this feature will only work with Japanese monolingual
        dictionaries.
      </p>
      <h3>Highlight Searched Term</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-highlighted-term2.png"
        alt=""
        width="600"
        height="222"
      />

      <p>
        When selected, the searched term will be highlighted whenever it appears
        within a definition.
      </p>
      <h3>Show Export Target</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-Show-Export-Target.png"
        alt=""
        width="600"
        height="55"
      />

      <p>
        When selected, the current export target will be displayed to the right
        side of the main dictionary window's toolbar.
      </p>
      <p>
        The export target is the window that's currently selected for the Send
        to Field button to export definitions to. There are 4 possible export
        targets: the browser, the add window, the edit window, and the review
        screen. If multiple of these windows are open at once, the window most
        recently selected will be the export target.
      </p>
      <p>
        If the Send to Field button doesn't seem to be working, it's most likely
        because no export target is currently selected.
      </p>
      <h3>Dictionary Tooltips</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-tooltips.png"
        alt=""
        width="500"
        height="96"
      />

      <p>
        When selected, tooltips will appear when hovering various icons and
        buttons related to the add-on.
      </p>
      <h3>Global Hotkeys</h3>
      <p>
        When selected, the global hotkeys listed on the welcome screen of the
        main dictionary page will function.
      </p>
      <p>
        Turn this option off if the add-on's global hotkeys are causing
        collisions with other programs.
      </p>
      <h3>Open on Global Search</h3>
      <p>
        When selected, if the global search hotkey “Ctrl+C+Space” (“⌘+C+B” on
        Mac) is pressed at a time when the main dictionary window is closed, it
        will automatically open and search what is currently highlighted.
      </p>
      <h3>Max Total Search Results</h3>
      <p>
        The maximum number of entries that can be found across all dictionaries
        in a single search. Searches will be cut off short once this number of
        entries has been found.
      </p>
      <h3>Max Dictionary Search Results</h3>
      <p>
        The maximum number of entries that can be found in a single dictionary,
        in a single search. The add-on will automatically move on to searching
        the next dictionary once this number of entries has been found in a
        single dictionary.
      </p>
      <h3>Add Cards with Japanese Readings</h3>
      <p>
        This feature is for integration with the
        <nuxt-link
          to="/table-of-contents/anki/mia-japanese-addon/"
          target="_blank"
          rel="noopener noreferrer"
          >MIA Japanese add-on</nuxt-link
        >.
      </p>
      <p>
        If MIA Japanese is installed and this option is selected, when a card is
        generated with the Card Exporter, readings and pitch accents will
        automatically be generated for definitions that were sent to fields that
        are listed as active fields in MIA Japanese's settings.
      </p>
      <p>
        The manner in which readings and accents are generated is determined by
        the word button's settings within MIA Japanese. The exception to this is
        Audio and Pitch Graphs, which will not be generated regardless of the
        word button's settings.
      </p>

      <h3>Japanese Readings on Edit</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-mia-japanese2.gif"
        alt=""
        width="800"
        height="367"
      />

      <p>
        This feature is for integration with the
        <nuxt-link
          to="/table-of-contents/anki/mia-japanese-addon/"
          target="_blank"
          rel="noopener noreferrer"
          >MIA Japanese add-on</nuxt-link
        >.
      </p>
      <p>
        If MIA Japanese is installed and this option is selected, when a
        definition is sent to a card with the Send to Field button, if the
        destination field is listed as an active field in MIA Japanese's
        settings, readings and pitch accents will automatically be generated for
        the definition.
      </p>
      <p>
        The manner in which readings and accents are generated is determined by
        the word button's settings within MIA Japanese. The exception to this is
        Audio and Pitch Graphs, which will not be generated regardless of the
        word button's settings.
      </p>
      <h3>Google Images Search Region</h3>
      <p>
        The results of Google Images searches change depending on the region.
        Select which region to search here.
      </p>
      <h3>Maximum Image Width</h3>
      <p>
        The maximum width of an image that's sent to a card. When an image with
        a width larger than this is sent to a card, it will automatically be
        resized so that it's width matches this value.
      </p>
      <p>
        This applies to both images from the built-in Google Images dictionary
        and images pasted into the Card Exporter from outside the add-on.
      </p>
      <h3>Maximum Image Height</h3>
      <p>
        The maximum height of an image that's sent to a card. When an image with
        a height larger than this is sent to a card, it will automatically be
        resized so that it's height matches this value.
      </p>
      <p>
        This applies to both images from the built-in Google Images dictionary
        and images pasted into the Card Exporter from outside the add-on.
      </p>
      <h3>Surround Term (Front)</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-suround-term-left1.png"
        alt=""
        width="400"
        height="95"
      />

      <p>
        What appears directly to the left of the term and alternate term on the
        left side of definition headers.
      </p>
      <h3>Surround Term (Back)</h3>
      <img
        src="https://massimmersionapproach.com/imgs/2019/12/mia-dict-suround-term-right.png"
        alt=""
        width="400"
        height="90"
      />

      <p>
        What appears directly to the right of the term and alternate term on the
        left side of definition headers.
      </p>
      <h3>Forvo Language</h3>
      <p>
        The built-in Forvo dictionary will search for audio in this language.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page',
  head() {
    return {
      title: this.title,
      titleTemplate: 'MIA Dictionary Guide - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'The MIA Dictionary Anki addon is designed to radically streamline the card creation process for language learning.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'MIA Dictionary Guide - %s'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'TThe MIA Dictionary Anki addon is designed to radically streamline the card creation process for language learning.'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'MIA Dictionary Guide - %s'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'TThe MIA Dictionary Anki addon is designed to radically streamline the card creation process for language learning.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.article-container {
  margin: 25px auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.article-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
img {
  height: auto;
  max-width: 70%;
  display: block;
  margin: 0;
  box-sizing: border-box;
  clear: both;
}
@media screen and (max-width: 600px) {
  .article-container {
    width: 85%;
  }
  .article-content img {
    max-width: 200px;
  }
}
</style>
