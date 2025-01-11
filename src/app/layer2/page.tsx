import Link from "next/link";

const mockData = [
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
];

const mockImage = mockData.map((url, index) => ({ id: index + 1, url }));

export default function Layer2Page() {
  return (
    <main className="">
      <div>
        (THIS IS LAYER 2)
      </div>
    </main>
  );
}
