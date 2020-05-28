<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/anki">Anki</nuxt-link>
    </p>
    <h1 style="text-align: center;">MIA Editor Addon Guide</h1>
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
                  <p>Table of Contents</p>
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
                      <nuxt-link class="linkx" to="#in-place-editing"
                        >In-place Editing</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link class="linkx" to="#persistent-editor"
                        >Persistent Editor Window</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link class="linkx" to="#quick-image-resizing"
                        >Quick Image Resizing</nuxt-link
                      >
                    </li>
                  </ul>
                </div>
                <h1 id="intro">Intro</h1>
                <img
                  src="https://massimmersionapproach.com/imgs/mia-editor-addon/mia-editor-main-preview.gif"
                  alt="MIA Editor Addon preview"
                />
                <p>
                  MIA Editor is an Anki add-on that makes it quicker and easier
                  to edit cards while reviewing. It comes with two main
                  features: <b>In-place Editing</b> and a
                  <b>Persistent Editor Window</b>.
                </p>

                <p>
                  With <b>In-place Editing</b>, you can edit cards while
                  reviewing without having to open up a separate editor window.
                  Simply double-click the field you want to edit and make
                  changes directly on the card.
                </p>

                <p>
                  If you prefer editing cards in a separate window, the
                  <b>Persistent Editor Window</b> allows you to do so more
                  efficiently. Once opened, the Persistent Editor Window will
                  remain open until manually closed. As you review, the current
                  card is automatically loaded into the editor, and any changes
                  made are instantly reflected in the reviewer. While a card’s
                  frontside is being displayed in the reviewer, all fields in
                  the editor are automatically hidden, guaranteeing the backside
                  of the card isn’t prematurely revealed.
                </p>
                <h3>Why MIA Editor?</h3>
                <p>
                  When using Anki to learn languages, tools such as Subs2srs and
                  MorphMan can save you time by allowing you to automate the
                  card creation process. The only issue is that many cards
                  created through automation end up containing small errors or
                  things that need to be tweaked. With the MIA Editor, you can
                  quickly fix these things on the fly while reviewing, further
                  streamlining the card creation process.
                </p>
                <p>
                  You can download MIA Editor here. Please note that the add-on
                  is designed to work with specific versions of Anki; see the
                  <nuxt-link to="#installation">Installation</nuxt-link> section
                  for more details.
                </p>
              </div>
            </div>
          </div>

          <div
            data-id="1c247bc"
            class="elementor-element elementor-element-1c247bc elementor-widget elementor-widget-text-editor"
            data-element_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              <div class="elementor-text-editor elementor-clearfix">
                <h1 id="installation">Installation</h1>
                <h3>MIA Team Development Cycles</h3>
                <p>
                  The MIA team develops add-ons in 6-month development cycles.
                  For the duration of a development cycle, we design add-ons for
                  the latest stable version of Anki that was available at the
                  beginning of that cycle. At the end of a development cycle,
                  all MIA add-ons are upgraded to the latest stable version of
                  Anki.
                </p>
                <h4>Why we use development cycles:</h4>
                <ul>
                  <li>
                    By not needing to constantly update add-ons each time a new
                    version of Anki is released, we’re better able to stay
                    focused on new projects.
                  </li>
                  <li>
                    When everyone is using the same version of Anki and the same
                    version of add-ons, bug fixing can proceed more efficiently.
                  </li>
                  <li>
                    Because users only have to update their set-up once every 6
                    months, they can more easily stay focused on their studies.
                  </li>
                  <li>
                    We surveyed our users and found that the vast majority
                    approved of a 6-month development cycle.
                  </li>
                </ul>
                <h4>Current Cycle Details:</h4>
                <p>
                  Anki Version:
                  <a
                    href="https://github.com/ankitects/anki/releases/tag/2.1.22"
                    >2.1.22</a
                  >
                  (Windows and Linux),
                  <a
                    href="https://github.com/ankitects/anki/releases/tag/2.1.23"
                    >2.1.23</a
                  >
                  (macOS) [The “alternate” variants are for 32-bit systems]
                  <br />
                  Start Date: April 6th, 2020 <br />
                  Next Cycle Start Date: October 6th, 2020
                </p>
                <h3>
                  Installing the Addon
                </h3>
                <p>
                  MIA Editor can be installed in the same manner as any other
                  Anki add-on. You can find the addon on Ankiweb
                  <a href="https://ankiweb.net/shared/info/1051095155">here</a>.
                </p>
              </div>
            </div>
          </div>

          <div
            data-id="059821d"
            class="elementor-element elementor-element-059821d elementor-widget elementor-widget-text-editor"
            data-element_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              <div class="elementor-text-editor elementor-clearfix">
                <h1 id="in-place-editing">In-place Editing</h1>
                <img
                  src="https://massimmersionapproach.com/imgs/mia-editor-addon/mia-editor-enable-disable.gif"
                  alt="In-place Editing preview"
                />
                <p>
                  After installing the add-on, In-place Editing will be enabled
                  by default. To disable, go to “MIA” on Anki’s menu bar and
                  select “Disable In-place Editing”.
                </p>
                <p>
                  To use In-Place Editing, while reviewing, simply double-click
                  on a field’s content to edit it. Once you’ve finished editing,
                  click away to save the change. In-Place Editing functions the
                  same on both the frontside and backside of cards.
                </p>
                <p>
                  While editing, you can use the hotkey “Ctrl+Z” to undo
                  changes. After clicking away, you’ll no longer be able to
                  reverse changes with “Ctrl+Z”.
                </p>
                <img
                  src="https://massimmersionapproach.com/imgs/mia-editor-addon/mia-editor-show-empty-fields.gif"
                  alt="Empty Fields Styling preview"
                />
                <p>
                  When “Show Empty Feels” is enabled, fields with no content
                  will be displayed in the form of a red box. “Show Empty
                  Fields” is disabled by default. To enable, go to “MIA” on
                  Anki’s menu bar and select “Show Empty Fields”.
                </p>
                <img
                  src="https://massimmersionapproach.com/imgs/mia-editor-addon/mia-editor-image-paste.gif"
                  alt="Paste Image preview"
                />
                <img
                  src="https://massimmersionapproach.com/imgs/mia-editor-addon/mia-editor-drag-audio.gif"
                  alt="Drag/Drop Audio and Images preview"
                />
                <p>
                  While editing a field in-place, you can paste in images and
                  audio files directly from the clipboard. See the Quick Image
                  Resizing section for how to resize images you paste in.
                </p>
                <img
                  src="https://massimmersionapproach.com/imgs/mia-editor-addon/mia-editor-bold.gif"
                  alt="Bold Hotkey preview"
                />
                <p>
                  In-Place Editing is compatible with the hotkeys for bold
                  (Ctrl+B), italicize (Ctrl+I), and underline (Ctrl+U).
                </p>
                <img
                  src="https://massimmersionapproach.com/imgs/mia-editor-addon/mia-editor-mia-japanese.gif"
                  alt="MIA Japanese Compatibility preview"
                />
                <p>
                  If the
                  <nuxt-link to="/table-of-contents/anki/mia-japanese-addon/"
                    >MIA Japanese add-on</nuxt-link
                  >
                  is installed, In-Place Editing will also be compatible with
                  MIA Japanese’s hotkeys: F2 for the sentence button, F3 for the
                  word button, and F4 for the removal button.
                </p>
              </div>
            </div>
          </div>

          <div
            data-id="059821d"
            class="elementor-element elementor-element-059821d elementor-widget elementor-widget-text-editor"
            data-element_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              <div class="elementor-text-editor elementor-clearfix">
                <h1 id="persistent-editor">Persistent Editor Window</h1>
                <img
                  src="https://massimmersionapproach.com/imgs/mia-editor-addon/realtime-editing.gif"
                  alt="Paste Image preview"
                />
                <p>
                  If you prefer editing cards in a separate window, the
                  Persistent Editor Window allows you to do so more efficiently.
                </p>
                <img
                  src="https://massimmersionapproach.com/imgs/mia-editor-addon/mia-editor-persistent-editor.gif"
                  alt="Persistent Editor preview"
                />
                <p>
                  Once MIA Editor is installed, the Persistent Editor Window
                  will replace Anki’s default editor window. To open it, while
                  reviewing, simply press the “Edit” button on the bottom left
                  of the main window.
                </p>
                <p>
                  Once open, the Persistent Editor Window will remain open until
                  manually closed. While the Persistent Editor Window is open,
                  In-place Editing will be automatically disabled. In-place
                  Editing will be re-enabled once the Persistent Editor Window
                  is closed.
                </p>
                <p>
                  Unlike Anki’s default editor window, while the Persistent
                  Editor Window is open, the current card will remain loaded in
                  the reviewer. Any changes made will be instantly reflected on
                  the card.
                </p>
                <p>
                  While the frontside of a card is being displayed in the
                  reviewer, the Persistent Editor Window will automatically hide
                  the content of fields. This is to prevent users from
                  accidentally seeing a card’s “answer” while reviewing. Once
                  the backside of a card is displayed, the hidden fields within
                  the Editor will automatically be revealed.
                </p>
                <p>
                  To expose the content of fields while a card’s frontside is
                  being displayed, simply click on the Persistent Editor Window.
                  Once you click back on the reviewer, the content of fields
                  will be re-concealed.
                </p>
              </div>
            </div>
          </div>

          <div
            data-id="059821d"
            class="elementor-element elementor-element-059821d elementor-widget elementor-widget-text-editor"
            data-element_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              <div class="elementor-text-editor elementor-clearfix">
                <h1 id="quick-image-resizing">Quick Image Resizing</h1>
                <img
                  src="https://massimmersionapproach.com/imgs/mia-editor-addon/image-resizing.gif"
                  alt="Image resizing preview"
                />
                <p>
                  An additional feature of MIA Editor is Quick Image Resizing.
                </p>
                <p>
                  You can use Quick Image Resizing anywhere within Anki: the
                  Persistent Editor Window, the Add Notes window, the browser,
                  or during In-place Editing.
                </p>
                <img
                  src="https://massimmersionapproach.com/imgs/mia-editor-addon/mia-editor-image-resize.png"
                  alt="Image resizing preview"
                />
                <p>
                  To resize an image while maintaining its aspect ratio, click
                  and hold on the image, and move your cursor to the left or
                  right. Moving your cursor to the left will shrink the image,
                  while moving it to the right will enlarge it.
                </p>
                <p>
                  To resize an image freely (without maintaining its original
                  aspect ratio), click and hold on the image while pressing the
                  “Ctrl” key, and move your cursor freely to stretch or compress
                  the image. Moving your cursor to the left or right will
                  stretch or compress the image horizontally, while moving the
                  cursor up or down will stretch or compress the image
                  vertically.
                </p>
                <p>
                  When shrinking an image, the minimum size is 40px in either
                  direction.
                </p>
                <p>
                  You can return an image to its original size at any time by
                  clicking on the image while holding the “Shift” key. After an
                  image has been resized, the new dimensions are saved using
                  CSS; the actual file for the image is not affected. Thus,
                  images can be reset to their original dimensions at any time
                  without any quality being lost.
                </p>
                <p>
                  If you forget any of the above commands, simply hover over an
                  image to make an overview appear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page',
  head() {
    return {
      title: this.title,
      titleTemplate: 'MIA Editor Addon Guide - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'The MIA Editor Addon is an Anki add-on that makes it quicker and easier to edit cards while reviewing.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'MIA Editor Addon Guide - Mass Immersion Approach'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'The MIA Editor Addon is an Anki add-on that makes it quicker and easier to edit cards while reviewing.'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'MIA Editor Addon Guide - Mass Immersion Approach'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'The MIA Editor Addon is an Anki add-on that makes it quicker and easier to edit cards while reviewing.'
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
img {
  height: auto;
  max-width: 100%;
  display: block;
  margin: 15px auto;
  box-sizing: border-box;
  clear: both;
}
@media screen and (max-width: 600px) {
  .article-container {
    width: 80%;
  }
  .article-content p h4 {
    margin: 10px 0;
  }
}
</style>
