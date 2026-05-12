/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react'

const components = {
  block: {
    normal: ({ children }: any) => <p className="mb-6 text-zinc-300 leading-relaxed">{children}</p>,
  },
}

export default function CustomPortableText({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}