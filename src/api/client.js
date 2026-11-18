const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "https://medicast-be.onrender.com").replace(/\/$/, "");

export async function apiRequest(path, { method = "GET", body, signal } = {}) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      signal,
      ...(body === undefined ? {} : {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }),
    });
  } catch (error) {
    if (error?.name === "AbortError") throw error;
    throw new Error("서버에 연결할 수 없습니다. 네트워크 또는 CORS 설정을 확인해주세요.");
  }
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(data?.message || (response.status === 401
      ? "서버에서 인증을 요구하고 있습니다. 백엔드의 공용 데모 설정을 확인해주세요."
      : `요청에 실패했습니다. (HTTP ${response.status})`));
    error.status = response.status;
    error.code = data?.code;
    throw error;
  }
  return data;
}
