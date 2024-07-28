"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (searchText.length === 0) {
      inputRef?.current?.blur();
      return;
    }
    router.push(`/events/${searchText}`);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search events in any city..."
        spellCheck={false}
        className="bg-gray-700 rounded-lg p-4 px-20 border-2 focus:ring-2 ring-lime-500"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        ref={inputRef}
      />
    </form>
  );
}

export default SearchForm;
