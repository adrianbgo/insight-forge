import React, { FC, useState } from "react";
import styles from "./Article.module.css";

const Article: FC = () => {
  const [articleOutline, setArticleOutline] = useState("");
  const [copilotText, setCopilotText] = useState("");
  const [articleTitle, setArticleTitle] = useState("");

  return (
    // form element for article input
    <form action={""} className={styles.Article}>
      <div className={styles.ArticleTitleContainer}>
        <textarea
          className={styles.ArticleTitle}
          name="title"
          id="title"
          value={articleTitle}
          placeholder="Article Title"
          onChange={(e) => setArticleTitle(e.target.value)}
        />
      </div>
      {/* Textarea for article content */}
      <textarea
        className={styles.ArticleContent}
        id="content"
        name="content"
        value={copilotText}
        placeholder="Write your article content here"
        onChange={(e) => setCopilotText(e.target.value)}
      />

      {/* Publish Button */}
      <button type="submit" className={styles.ArticleSubmit}>
        Publish
      </button>
    </form>
  );
};

export default Article;
