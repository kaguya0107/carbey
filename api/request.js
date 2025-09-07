export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        // Forward to Google Apps Script
        await fetch("https://script.google.com/macros/s/AKfycbyfYB-DGkeG-GW0NL-hmx20G10o0e6_vlYw3ltkENUOs8OE-fg8BZDOjGxkmxF8auqmpA/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        res.status(200).json({ status: "success" });
    } else {
        res.status(405).json({ msg: "Method not allowed" });
    }
}
