/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: user 관련 api
 * definitions:
 *   Auth_request:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *         description: 아이디(이메일)
 *       password:
 *         type: string
 *         description: 비밀번호
 *   Register_request:
 *       type: object
 *       required:
 *          -email
 *          -auth
 *          -password
 *       properties:
 *         email:
 *            type: string
 *            description: 아이디(이메일)
 *         password:
 *            type: string
 *            description: 비밀번호
 *         auth:
 *            type: boolean
 *            description: 이메일인증여부
 *   Auth_response:
 *     type: object
 *     required:
 *       - status
 *     properties:
 *       status:
 *         type: string
 *         description: 로그인 성공 여부- error, success
 *       token:
 *         type: object
 *         description: 계정 정보
 *   Response_error:
 *     type: object
 *     required:
 *       - status
 *     properties:
 *       message:
 *         type: string
 *         description: 오류 사유
 *       status:
 *         type: integer
 *         description: response code
 */

//로그인
/**
 * @swagger
 *  paths:
 *    /user/signIn:
 *      post:
 *        tags:
 *        - "Auth"
 *        summary: "로그인"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:

 *        - in: body
 *          type: object
 *          name: 로그인정보
 *          required: true
 *          schema:
 *            $ref: "#/definitions/Auth_request"
 *        responses:
 *          200:
 *            description: "로그인 성공"
 *          400:
 *            description: "잘못된 데이터"
 *          403:
 *            description: "권한 에러"
 *          500:
 *            description: "로그인 오류 & 실패"
 */

/**
 * @swagger
 *  paths:
 *    /user:
 *      post:
 *        tags:
 *        - "Auth"
 *        summary: "회원가입"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: body
 *          type: object
 *          name: 가입정보
 *          required: true
 *          schema:
 *            $ref: "#/definitions/Register_request"
 *        responses:
 *          200:
 *            description: "회원가입 성공"
 *          400:
 *            description: "잘못된 데이터"
 *          403:
 *            description: "권한 에러"
 *          500:
 *            description: "서버 오류 & 실패"
 */
