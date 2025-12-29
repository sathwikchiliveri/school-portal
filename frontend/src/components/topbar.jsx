function topbar() {
  return (
    <div
      style={{
        height: 56,
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
      }}
    >
      {/* Left */}
      <div style={{ fontWeight: 600 }}>School Portal</div>

      {/* Right */}
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <span style={{ fontSize: 14, color: "#475569" }}>Role: Admin</span>
        <button
          style={{
            padding: "6px 12px",
            borderRadius: 6,
            border: "1px solid #cbd5f5",
            background: "#f8fafc",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default topbar;
