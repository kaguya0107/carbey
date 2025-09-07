export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        // Forward to Google Apps Script
        await fetch("https://script.google.com/macros/s/AKfycby_h7rMzsHRbYOp-A2LRo3YswrWa8qbvoe0s_sn7uvnZI6iZsqDhWr5ESWf0M7xt1ezsw/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        res.status(200).json({ status: "success" });
    } else {
        res.status(405).json({ msg: "Method not allowed" });
    }
}
