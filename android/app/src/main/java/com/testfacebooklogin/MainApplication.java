package com.testfacebooklogin;

import android.app.Application;
import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.react.ReactApplication;
import com.idehub.Billing.InAppBillingBridgePackage;
import com.geektime.rnonesignalandroid.ReactNativeOneSignalPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.util.Base64;
import android.util.Log;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

private static final String TAG = MainApplication.class.getSimpleName();

	private static CallbackManager mCallbackManager = CallbackManager.Factory.create();
	private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
		@Override
		public boolean getUseDeveloperSupport() {
			return BuildConfig.DEBUG;
		}

		@Override
		protected List<ReactPackage> getPackages() {
			return Arrays.<ReactPackage>asList(
					new MainReactPackage(),
            new InAppBillingBridgePackage(),
                    new ReactNativeOneSignalPackage(),
					new VectorIconsPackage(),
					new FBSDKPackage(mCallbackManager)
			);
		}
	};

	protected static CallbackManager getCallbackManager() {
		return mCallbackManager;
	}

	@Override
	public ReactNativeHost getReactNativeHost() {
		return mReactNativeHost;
	}

	@Override
	public void onCreate() {
		super.onCreate();
		SoLoader.init(this, /* native exopackage */ false);
		FacebookSdk.sdkInitialize(getApplicationContext());
		// If you want to use AppEventsLogger to log events.
		AppEventsLogger.activateApp(this);
		printKeyHash();
	}

		private void printKeyHash() {
    		try {
    			PackageInfo info = getPackageManager().getPackageInfo(
    					"oiz.com.vnastro", PackageManager.GET_SIGNATURES);
    			for (Signature signature : info.signatures) {
    				MessageDigest md = MessageDigest.getInstance("SHA");
    				md.update(signature.toByteArray());
    				Log.d(TAG, Base64.encodeToString(md.digest(), Base64.DEFAULT));
    			}
    		} catch (PackageManager.NameNotFoundException | NoSuchAlgorithmException e) {
    			Log.e(TAG, "printKeyHash: ", e);
    		}
    	}
}
