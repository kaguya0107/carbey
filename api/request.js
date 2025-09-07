export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        // Forward to Google Apps Script
        await fetch("https://script.google.com/macros/s/AKfycbwQDwHXSMNTee4EDWi6zk0cgudbShnhNGto3jaP29fDx6oEFYSjaSMRDE0pPXlrxHIEFQ/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        res.status(200).json({ status: "success" });
    } else {
        res.status(405).json({ msg: "Method not allowed" });
    }
}
