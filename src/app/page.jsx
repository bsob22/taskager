"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };
  return (
    <div>
      <h2 className="text-3xl">Welcome to ollert</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit
        optio enim aliquid illo accusamus! Obcaecati assumenda architecto in
        repellat modi corrupti ad dolores quae quo porro laborum, vero labore.
      </p>
    </div>
  );
}
                            