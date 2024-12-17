import React, { useEffect } from 'react';
import './quote.css'; // Import your CSS file

const QuoteComponent = () => {
  useEffect(() => {
    // The JavaScript logic from quote.js (example included below)
    const splitWords = () => {
      let quote = document.querySelector("blockquote q h1");
      quote.innerText.replace(/(<([^>]+)>)/ig, "");
      let quotewords = quote.innerText.split(" "),
          wordCount = quotewords.length;
      quote.innerHTML = "";
      for (let i = 0; i < wordCount; i++) {
        quote.innerHTML += "<span>" + quotewords[i] + "</span>";
        if (i < quotewords.length - 1) {
          quote.innerHTML += " ";
        }
      }
      const words = document.querySelectorAll("blockquote q h1 span");
      fadeWords(words);
    };

    const getRandom = (min, max) => Math.random() * (max - min) + min;

    const fadeWords = (quotewords) => {
      Array.prototype.forEach.call(quotewords, function (word) {
        word.animate(
          [
            { opacity: 0, filter: "blur(" + getRandom(2, 5) + "px)" },
            { opacity: 1, filter: "blur(0px)" },
          ],
          {
            duration: 1000,
            delay: getRandom(500, 3300),
            fill: "forwards",
          }
        );
      });
    };

    // Run logic after 4 seconds
    setTimeout(() => {
      splitWords();
    }, 4000);
  }, []);

  return (
    <div className="blockquote-wrapper">
      <blockquote contentEditable="true">
        <q>
          <h1>
            The most authentic thing about us is our capacity to create, to
            overcome, to endure, to transform, to love and to be greater than
            our suffering.
          </h1>
        </q>
        <cite>-Ben Okri</cite>
      </blockquote>
    </div>
  );
};

export default QuoteComponent;
