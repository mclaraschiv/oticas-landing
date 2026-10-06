import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const webhookUrl = process.env.FORM_WEBHOOK_URL;

    if (!webhookUrl) {
      // Dev fallback: just log and return success
      console.log("[form] Webhook URL not set. Payload:", body);
      return NextResponse.json({ ok: true });
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "diagnostico",
        timestamp: new Date().toISOString(),
        ...body,
      }),
    });

    if (!res.ok) {
      console.error("[form] Webhook responded with status", res.status);
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[form] Error forwarding to webhook:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
