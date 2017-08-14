<?php

namespace app\modules\admin\controllers;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBasicAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\QueryParamAuth;
use app\filters\auth\HeaderParamAuth;
use yii\filters\RateLimiter;
use yii\rest\ActiveController;
use app\models\User;
use Yii;

class UserController extends ActiveController
{
    public $modelClass = 'app\models\User';

    public $serializer = [
        'class' => 'yii\rest\Serializer',
        'collectionEnvelope' => 'users',
    ];
    
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => HttpBasicAuth::className(),

            'auth' => [ 'app\models\User', 'httpBasicAuth'],
            /*'auth' => function ($username, $password) {
                $user = User::find()->where(['email' => $username])->one();
                if ($user->validatePassword($password)) {
                    return $user;
                }
                return null;
            },*/
            'only' => [ 'delete', 'update', 'create', 'index']
        ];
        $behaviors['rateLimiter'] = [
            'class' => RateLimiter::className(),
            'enableRateLimitHeaders' => true,
        ];
        
        return $behaviors;
    }

    public function actionError()
    {
        $exception = Yii::$app->errorHandler->exception;
        if ($exception !== null) {
            return ['exception' => $exception];
        }
    }
    
    public function actionDirectResponse(){
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        return Yii::t('app','pong');        
    }
    
    public function actionGetUser(){
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        return Yii::t('app','pong');        
    }
            
            

}
