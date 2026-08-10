"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { SplitH2, SplitP } from "../components"
import { BsCopy } from "react-icons/bs"

const EMAIL = "romancastro.dev@gmail.com"

export const FifthSection = () => {
    const [emailCopied, setEmailCopied] = useState(false)
    const copiedTimeout = useRef(null)

    const copyEmail = async () => {
        await navigator.clipboard.writeText(EMAIL)
        setEmailCopied(true)

        if (copiedTimeout.current) {
            clearTimeout(copiedTimeout.current)
        }

        copiedTimeout.current = setTimeout(() => {
            setEmailCopied(false)
        }, 3000)
    }

    useEffect(() => {
        return () => {
            if (copiedTimeout.current) {
                clearTimeout(copiedTimeout.current)
            }
        }
    }, [])

    return <section id="fifthSection">

        <article>
            <SplitH2 id="fifthSectionTitle">
                HAVE AN IDEA? <br />
                <span>LET'S BUILD IT.</span>
            </SplitH2>
            <SplitP id="fifthSectionParagraph">
                Have a project, an opportunity
                or just an idea?
                I'd love to hear about it.
            </SplitP>
        </article>

        <article>
            <button onClick={copyEmail} type="button" aria-label="Copy email">
                <span className={emailCopied ? "is-copied" : undefined}>
                    {emailCopied ? "EMAIL COPIED" : EMAIL}
                </span>
                <BsCopy className={emailCopied ? "is-copied" : undefined} />
            </button>
            <p>
                <Link href={'/'}>
                    LINKEDIN
                </Link>
                <Link href={'/'}>
                    GITHUB
                </Link>
                <Link href={'/'}>
                    INSTAGRAM
                </Link>
                <Link href={'/'}>
                    DOWNLOAD RESUME
                </Link>
            </p>
        </article>

        <p>DESIGNED & DEVELOPED BY ROMÁN CASTRO</p>
        <p>©2026</p>
    </section>
}
