"use client";

export default function UploadPage() {
  const handleUpload = async (file: File) => {
    // Client-side validation
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("Only JPG or PNG allowed");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("File too large (max 2MB)");
      return;
    }

    const res = await fetch("/api/upload-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
      }),
    });

    const { uploadUrl } = await res.json();

    await fetch(uploadUrl, {
      method: "PUT",
      body: file,
      headers: { "Content-Type": file.type },
    });
  };

  return (
    <input
      type="file"
      onChange={(e) => e.target.files && handleUpload(e.target.files[0])}
    />
  );
}
