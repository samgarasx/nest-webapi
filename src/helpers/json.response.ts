export class JsonResponse {
  ok: boolean;
  data?: any;
  error?: any;

  static success<T>(data: T): JsonResponse {
    return {  ok: true, data: data };
  }
  
  static failure<T>(error: T): JsonResponse {
    return { ok: false, error: error };
  }
}
