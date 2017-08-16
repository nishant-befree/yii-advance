<?php

namespace app\modules\admin;

/**
 * admin module definition class
 */
class Module extends \yii\base\Module
{
    /**
     * @inheritdoc
     */
    public $controllerNamespace = 'app\modules\admin\controllers';

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();

        // custom initialization code goes here
        // As yii uses session by default, will need to disable session as it will violate the stateless constraints
        // of a RESTful server
        \Yii::$app->user->enableSession = false;      
    }
}
