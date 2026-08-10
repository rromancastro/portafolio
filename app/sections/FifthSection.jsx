"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { SplitH2, SplitP } from "../components"
import { useLanguage } from "../i18n"
import { BsCopy } from "react-icons/bs"

const EMAIL = "romancastro.dev@gmail.com"

export const FifthSection = () => {
    const { language, t } = useLanguage()
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
            <SplitH2 key={`title-${language}`} id="fifthSectionTitle">
                {t.fifth.titleLineOne} <br />
                <span>{t.fifth.titleLineTwo}</span>
            </SplitH2>
            <SplitP key={`paragraph-${language}`} id="fifthSectionParagraph">
                {t.fifth.paragraph}
            </SplitP>
        </article>

        <article>
            <button onClick={copyEmail} type="button" aria-label={t.fifth.copyEmail}>
                <span className={emailCopied ? "is-copied" : undefined}>
                    {emailCopied ? t.fifth.copied : EMAIL}
                </span>
                <BsCopy className={emailCopied ? "is-copied" : undefined} />
            </button>
            <p>
                <Link target="_blank" href={'https://www.linkedin.com/in/rromancastro/'}>
                    LINKEDIN
                </Link>
                <Link target="_blank" href={'https://github.com/rromancastro'}>
                    GITHUB
                </Link>
                <Link target="_blank" href={'https://www.instagram.com/romancastro.dev/'}>
                    INSTAGRAM
                </Link>
                <Link download={true} href={'/CV-RomanCastro.pdf'}>
                    {t.fifth.resume}
                </Link>
            </p>
        </article>

        <p>{t.fifth.credits}</p>
        <p>©2026</p>
    </section>
}
