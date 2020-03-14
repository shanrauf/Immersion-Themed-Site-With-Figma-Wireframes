<template>
  <div class="article-container">
    <p>
      <nuxt-link to="/table-of-contents/">Table of Contents</nuxt-link> |
      <nuxt-link to="/table-of-contents/extra/success-stories"
        >Success Storiess</nuxt-link
      >
    </p>
    <h1>Nick (Nitbean)</h1>
    <div class="article-content">
      <p>
        Nick got wicked good at Japanese in an incredibly short amount of time.
        An interview with him can be found
        <a
          href="https://www.patreon.com/posts/interview-with-2-16483471"
          target="_blank"
          rel="noopener noreferrer"
          >here</a
        >. A video of Nick giving advice to Japanese learners can be found
        <a
          href="https://youtu.be/o-TqyBgFZn0"
          target="_blank"
          rel="noopener noreferrer"
          >here</a
        >. Below is an audio recording of Nick speaking Japanese. It was
        recorded in January, 2018, almost exactly three years after he began
        learning Japanese. Below is an essay he wrote around the same time.
      </p>
      <iframe
        scrolling="no"
        src="https://w.soundcloud.com/player/?visual=false&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F494826573&amp;show_artwork=true&amp;maxwidth=1200&amp;maxheight=1000&amp;dnt=1&amp;auto_play=false&amp;buying=false&amp;liking=false&amp;download=true&amp;sharing=false&amp;show_comments=false&amp;show_playcount=false&amp;show_user=false&amp;color=204f70"
        width="1200"
        height="200"
        frameborder="no"
      ></iframe>
      <h1>レポート（岡田先生の授業）</h1>
      <h2>テーマ: 日本のCMに於けるストーリー性</h2>
      <p>
        日本のCMは、他国(特に米国)のに比べて見ると、ストーリー性が大事で、単なる宣伝ではなく、しっかりとした「物語」が見えてくる。この「ストーリー性」というのは、視聴者への親切さの一環として作られたものと考えても良い。収縮された情報を提供する普通のCMと違い、ストーリー性のあるCMは、分かりやすく展開して行き、その製品や宣伝の対象を優しく視聴者に見せてくれる。以下のCMを一例として挙げよう。&nbsp;
      </p>
      <YouTubeEmbed src="https://www.youtube.com/embed/AVS9Dqgpo3g" />

      <p>
        任天堂スイッチの「見守り」という機能を宣伝するCMだが、使い方を説明するのみならず、クッパーとベイビークッパーを「登場人物」に仕立て上げ、親子役を演じさせる。視聴者に情報を伝える時に、言葉だけでなく、「役者」の行動やキャラ付けによって製品の特徴が伝わってくる(注意:この効果の一部は、既に知られている、知名度の高いクッパー親子を使用することによって出ているもの)。これで、親密・好感度の高いクッパー親子を用いて、視聴者にとって共感しやすいストーリー性のあるCMの作成に成功した。&nbsp;次は米国の例を挙げよう&nbsp;
      </p>
      <YouTubeEmbed src="https://www.youtube.com/embed/mIuv_dYV498" />

      <p>
        この眼鏡専門店のCMの中には、フクロウと女性は出ているとはいえ、キャラ付けが日本のCMに比べたら著しく薄く、当店の情報を伝えるだけの手段に過ぎない。長さから見ると、米国の方が圧倒的に短く、情報量が多くなっている。視聴者の立場から考えると、こちらのCMは前者より分かりにくく、印象に残るようなものが比較的に少ない。&nbsp;
      </p>
      <p>
        以上の「ストーリー性」の差は、客に対する考え方の違いから生まれてくる。ストーリーがある程度成り立っているCMだと、分かりやすくかつ印象的なものになる。しかしその分、作成も難しく、効果がない時は、非常に損してしまう。そのリスクを抱えながらも視聴者の立場を考慮に入れた上でCMを作ること、つまり、客の気持ちを優先することは、日本の企業だけではなく、日本文化そのものの根本的な部分である。
      </p>
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
