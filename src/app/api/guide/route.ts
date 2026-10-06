import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const webhookUrl = process.env.GUIDE_WEBHOOK_URL;

    if (!webhookUrl) {
      console.log("[guide] Webhook URL not set. Payload:", body);
      return NextResponse.json({ ok: true });
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "guia_pdf",
        timestamp: new Date().toISOString(),
        ...body,
      }),
    });

    if (!res.ok) {
      console.error("[guide] Webhook responded with status", res.status);
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[guide] Error forwarding to webhook:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
