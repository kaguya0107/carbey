export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        // Forward to Google Apps Script
        await fetch("https://script.google.com/macros/s/AKfycbz1OsVATBozZnN0Yix3nMZFhXqmKoUMDW21QByl-6qRkgN9axnGIHV8R3Wh1DSZ5qsiLw/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        res.status(200).json({ status: "success" });
    } else {
        res.status(405).json({ msg: "Method not allowed" });
    }
}
