import Image from "next/image";

export function FranciscoMark(props: React.ComponentProps<"div">) {
  const { className, ...rest } = props;
  return (
    <div className={className} {...rest}>
      <Image
        src="/audio/test2.svg"
        alt="Francisco Morales"
        width={2100}
        height={177}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}

export function getMarkSVG() {
  return `<img src="/audio/test2.svg" alt="Francisco Morales" />`;
}
