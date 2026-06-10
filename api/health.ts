import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * 배포 인프라 검증용 스텁 함수.
 * Vercel Serverless Function 빌드/라우팅이 정상인지 확인하는 용도다.
 * 실제 비즈니스 핸들러(문의 폼, 외부 API 프록시 등)는 이 파일을 본떠 추가한다.
 */
export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ status: "ok", service: "a002-aiedu-website" });
}
