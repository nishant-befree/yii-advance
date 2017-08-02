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
    'modules' => [],
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
        'response' => [
            'format'         => yii\web\Response::FORMAT_JSON,
            'charset'        => 'UTF-8',
            // @todo: move this to a separate event handler class (?)
            'on beforeSend'  => function ($event) {
                $response = $event->sender;

                // Because Yii2 CORS doesn't handle this 
                // @todo file a bug for this
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
        ],
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
            'rules' => [
                ['class' => 'yii\rest\UrlRule', 'controller' => 'user'],
                ['class' => 'yii\web\UrlRule', 'pattern' => 'site/<action>', 'route' => 'site/<action>']
            ],
        ],        
    ],
    'params' => $params,
];
