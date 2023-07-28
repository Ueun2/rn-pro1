package com.myproject01;


import android.view.WindowManager;

import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class BrightPackage extends ReactContextBaseJavaModule {

    private WindowManager.LayoutParams params;
    private float origin;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_brightness);
        params = getWindow().getAttributes();
    }

    @Override
    protected void onResume() {
        super.onResume();
        origin = params.screenBrightness;
        params.screenBrightness = 1.0f;
        getWindow().setAttributes(params);
    }

    @Override
    protected void onPause() {
        super.onPause();
        params.screenBrightness = origin;
        getWindow().setAttributes(params);
    }
}