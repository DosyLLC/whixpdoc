"use client";

import React from "react";
import CodeBlock from "@theme/CodeBlock";

const START_AT = "/* SNIPPET START */";
const END_AT = "/* SNIPPET END */";

const templateRegex = /^\s*\/\/\s*{@template\s(.+?)}/g;
const endTemplateRegex = /^\s*\/\/\s*{@endtemplate}/g;

type TranslationMap = Record<string, string>;

export function trimSnippet(
  snippet: string,
  translations?: TranslationMap
): string {
  if (!snippet) return;
  const startAtIndex = snippet.indexOf(START_AT);
  if (startAtIndex < 0) return snippet;

  let endAtIndex = snippet.indexOf(END_AT);
  if (endAtIndex < 0) endAtIndex = undefined;

  // Substring starts after "/* START" + 1 for the newline
  snippet = snippet.substring(startAtIndex + START_AT.length + 1, endAtIndex);

  let currentTemplateKey: string | undefined;

  const leadingSpaces = snippet.match(/^\h+/)?.[0];
  const lines = snippet.split("\n");

  const transformedLines: Array<string> = [];

  for (var i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (leadingSpaces && line.startsWith(leadingSpaces[0])) {
      line = line.substring(leadingSpaces.length);
    }

    const templateMatch = templateRegex.exec(line);
    const endTemplateMatch = endTemplateRegex.exec(line);

    if (templateMatch) {
      if (currentTemplateKey) {
        throw new Error(
          `Nested templates are not supported. Template ${currentTemplateKey} is already open (${templateMatch[1]})`
        );
      }

      const templateKey = templateMatch[1];

      const translation = translations?.[templateKey];

      if (translation) {
        // Replace the content if the template is translated, and insert the new content.
        currentTemplateKey = templateKey;
        transformedLines.push(translation);
      }

      // delete the template markup.
      continue;
    }

    if (endTemplateMatch) {
      currentTemplateKey = undefined;
      continue;
    }

    // If inside a translation, delete the untranslated content.
    if (currentTemplateKey) {
      continue;
    }

    transformedLines.push(line);
  }

  return transformedLines.join("\n");
}

interface CodeSnippetProps {
  title?: string;
  snippet: string;
  translations?: TranslationMap;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  snippet,
  title,
  translations,
  ...other
}) => {
  return (
    <div className={`snippet`}>
      <div className="snippet__title_bar">
        <div className="snippet__dots">
          <div className="snippet__dot"></div>
          <div className="snippet__dot"></div>
          <div className="snippet__dot"></div>
        </div>
        <div className="snippet__title">{title}</div>
      </div>
      <CodeBlock {...other}>{trimSnippet(snippet, translations)}</CodeBlock>
    </div>
  );
};

export function AutoSnippet(props: {
  title?: string;
  language?: string;
  codegen?: string | Array<string>;
  hooksCodegen?: string | Array<string>;
  raw: string | Array<string>;
  hooks?: string | Array<string>;
  translations?: TranslationMap;
}) {
  let snippet: string | Array<string>;
  snippet ??= props.raw;

  const code = Array.isArray(snippet) ? snippet.join("\n") : snippet;

  return (
    <CodeBlock language={props.language} title={props.title}>
      {trimSnippet(code, props.translations)}
    </CodeBlock>
  );
}