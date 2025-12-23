import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

if (!(globalThis as any).TextEncoder)
  (globalThis as any).TextEncoder = TextEncoder;
if (!(globalThis as any).TextDecoder)
  (globalThis as any).TextDecoder = TextDecoder;
