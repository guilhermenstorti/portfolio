import { useEffect } from "react";

interface DocumentMetaInput {
  readonly title: string;
  readonly description: string;
}

export function useDocumentMeta(input: DocumentMetaInput): void {
  useEffect(() => {
    document.title = input.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", input.description);
    }
  }, [input.title, input.description]);
}
