<?php
$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);

return [
    'id' => 'app-api',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'api\controllers',
    'bootstrap' => ['log'],
    'modules' => [
        'admin' => [
            'class' => 'app\modules\admin\Module',
        ],
    ],
    'components' => [
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'request' => [
            'csrfParam' => '_csrf-api',
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ]
        ],
       /* 'response' => [
            'format'         => yii\web\Response::FORMAT_JSON,
            'charset'        => 'UTF-8',
            // @todo: move this to a separate event handler class (?)
            'on beforeSend'  => function ($event) {
                $response = $event->sender;

                // Because Yii2 CORS doesn't handle this 
                // @todo file a bug for this
				$response->headers['Access-Control-Allow-Origin'] = '*';
                $response->headers['Access-Control-Allow-Headers'] = 'x-auth-token, Content-Type';
                $response->headers['Access-Control-Request-Method'] = 'GET, POST, PUT, OPTIONS, HEAD';

                if (\Yii::$app->request->getIsOptions())
                {
                    $response->statusCode = 200;
                    $response->data = null;
                }
                else
                {
                    if ($response->statusCode != 200)
                        $response->headers['Access-Control-Allow-Origin'] = '*';
                }
                
                if ($response->data !== null)
                {
                    $return = ($response->statusCode == 200 ? $response->data : $response->data['message']);

                    $response->data = [
                        'success'   =>  ($response->statusCode === 200),
                        'status'    => $response->statusCode,
                        'response'  => $return
                    ];
                }
            }
        ],*/
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-api', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the api
            'name' => 'advanced-api',
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'useFileTransport' => true,
        ],        
        'urlManager' => [
            'class' => 'yii\web\UrlManager',
            'enablePrettyUrl' => true,
            // for debugger showScriptName required to true, need to check in details
            'showScriptName' => false, 
            //'enableStrictParsing' => true,
            
            'rules' => [
//                
                ['class' => 'yii\rest\UrlRule',                    
                    'controller'    => 'admin/user',
                    'pluralize'     => false,
                    'tokens' => [
                        '{id}'  => '<id:\d+>',
                    ],
                ],
                ['class' => 'yii\rest\UrlRule', 'controller' => 'user'],
                ['class' => 'yii\web\UrlRule', 'pattern' => 'site/<action>', 'route' => 'site/<action>'],
                [
	                'class'         => 'yii\rest\UrlRule',
	                'controller'    => 'admin/user',
	                'pluralize'     => false,
	                'tokens' => [
		                '{id}'             => '<id:\d+>',
	                ],
	                'extraPatterns' => [
                                'GET me'            =>  'direct',
		                'OPTIONS {id}'      =>  'options',
		                'POST login'        =>  'login',
		                'OPTIONS login'     =>  'options',
		                'POST signup'       =>  'signup',
		                'OPTIONS signup'    =>  'options',
		                'POST confirm'      =>  'confirm',
		                'OPTIONS confirm'   =>  'options',
		                'POST password-reset-request'       =>  'password-reset-request',
		                'OPTIONS password-reset-request'    =>  'options',
		                'POST password-reset-token-verification'       =>  'password-reset-token-verification',
		                'OPTIONS password-reset-token-verification'    =>  'options',
		                'POST password-reset'       =>  'password-reset',
		                'OPTIONS password-reset'    =>  'options',
		                'GET me'            =>  'me',
                                
		                'POST me'           =>  'me-update',
		                'OPTIONS me'        =>  'options',
	                ]
                ],
            ],
        ],   
        'response' => [
            'class' => 'yii\web\Response',
            'on beforeSend' => function ($event) {

                $response = $event->sender;
                if($response->format == 'html') {
                    return $response;
                }

                $responseData = $response->data;

                if(is_string($responseData) && json_decode($responseData)) {
                    $responseData = json_decode($responseData, true);
                }


                if($response->statusCode >= 200 && $response->statusCode <= 299) {
                    $response->data = [
                        'success'   => true,
                        'status'    => $response->statusCode,
                        'data'      => $responseData,
                    ];
                } else {
                    $response->data = [
                        'success'   => false,
                        'status'    => $response->statusCode,
                        'data'      => $responseData,
                    ];

                }
                return $response;
            },
        ],
    ],
    'params' => $params,
];
